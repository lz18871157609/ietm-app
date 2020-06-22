
import { Injectable } from '@angular/core';
import * as tf from '@tensorflow/tfjs';
import { Prediction } from './image-classify';
import { Observable, of } from 'rxjs';
import { IMAGE_CLASSES } from './../../../assets/models/image-classes';

@Injectable({
  providedIn: 'root'
})
export class ImageClassifyService {
  AssetsUrl = `${window.location.origin}/assets`;
  ModelUrl = `${this.AssetsUrl}/models/mobilenet_v2_100_224/model.json`;
  ImageSize = 224; // 图像尺寸 224 x 224
  private normalizationOffset: tf.Scalar;

  private model: tf.GraphModel;
  // public predict =
  //  (input: HTMLImageElement ) => {
  //   const image = tf.browser.fromPixels(input).toFloat();
  //   const resized = tf.image.resizeBilinear(image, [ this.ImageSize, this.ImageSize] );
  //   const offset = tf.scalar(255 / 2);
  //   const normalized = resized.sub(offset).div(offset);
  //   // const expanded = normalized.expandDims(0);
  //   const expanded = normalized.reshape([-1, this.ImageSize, this.ImageSize, 3] );
  //   const output = this.model.predict(expanded) as any;
  //   const result = Array.from(output.dataSync());
  //   // return of(output);
  //   console.log('the prediction is : ', result);
  //   return of(result);
  // }

  async predict(
    img: tf.Tensor3D | ImageData | HTMLImageElement | HTMLCanvasElement |
      HTMLVideoElement): Promise<Array<{ className: string, probability: number }>> {
    let result: Array<{ className: string, probability: number }>;
     if (this.model !== undefined) {
     await this.classify(img).then(value => {
        result = value;
      }
      );
      return result;
    }
  }

  /**  加载模型并预热
   * @param: none
   * @return: Promise<void>
   *
   */
  public initModel = async () => {
    this.model = await tf.loadGraphModel(this.ModelUrl);

    // warmup the model
    const result = tf.tidy(
      () => this.model.predict(tf.zeros(
        [1, this.ImageSize, this.ImageSize, 3]
      ))
    ) as tf.Tensor;
    await result.data();
    result.dispose();
  }
  /**
   * 计算并输出图片分类的概率
   *
   * @param img ： 图片，可以是DoM元素或者 Tensor,
   *
   * @param embedding If true, it returns the embedding. Otherwise it returns
   *     the 1000-dim logits.
   */
  infer(
    img: tf.Tensor | ImageData | HTMLImageElement | HTMLCanvasElement |
      HTMLVideoElement,
    embedding = false): tf.Tensor {
    return tf.tidy(() => {
      if (!(img instanceof tf.Tensor)) {
        // console.log('transforming the image to Tensor');
        img = tf.browser.fromPixels(img);
      }

      // Normalize the image from [0, 255] to [-1, 1].
      const normalized = img.toFloat()
        .sub(this.normalizationOffset)
        .div(this.normalizationOffset) as tf.Tensor3D;

      // Resize the image to
      let resized = normalized;
      if (img.shape[0] !== this.ImageSize || img.shape[1] !== this.ImageSize) {
        const alignCorners = true;
        // console.log('resizing the image to 224 X 224 size ');
        resized = tf.image.resizeBilinear(
          normalized, [this.ImageSize, this.ImageSize], alignCorners);
      }

      // Reshape so we can pass it to predict.
      const batched = resized.reshape([-1, this.ImageSize, this.ImageSize, 3]);

      let result: tf.Tensor2D;

      // if (embedding) {
      //   const embeddingName = EMBEDDING_NODES[this.version];
      //   const internal =
      //       this.model.execute(batched, embeddingName) as tf.Tensor4D;
      //   result = internal.squeeze([1, 2]);
      // } else {
      //   const logits1001 = this.model.predict(batched) as tf.Tensor2D;
      //   // Remove the very first logit (background noise).
      //   result = logits1001.slice([0, 1], [-1, 1000]);
      // }
      result = this.model.predict(batched) as tf.Tensor2D;
      // console.log('the result of predict is ', result);

      return result;
    });
  }

  /** 执行分类，处理分类结果并进行排列
   * @param img: 图片，可以是DoM元素，或者Tensor3D
   * @param topK: 保留的标签数量
   */
  async classify(
    img: tf.Tensor3D | ImageData | HTMLImageElement | HTMLCanvasElement |
      HTMLVideoElement,
    topk = 3): Promise<Array<{ className: string, probability: number }>> {
    const logits = this.infer(img) as tf.Tensor2D;

    const classes = await this.getTopKClasses(logits, topk);

    logits.dispose();

    return classes;
  }

  /* 保留概率最高的'topK'个标签的标签名,概率
   * @param logits : 二维数组，图片属于每一类的概率，按照训练时标签的顺序给出概率
   * @param topK: number, 整数，保留的数量
   * @return  : （类别标签， 概率）数组，按照概率大小排序，Promise类型
   */
  //
  async getTopKClasses(logits: tf.Tensor2D, topK: number):
    Promise<Array<{ className: string, probability: number }>> {
    const softmax = logits.softmax();
    const values = await softmax.data();
    softmax.dispose();

    const valueAndIndices = [];
    for (let i = 0; i < values.length; i++) {
      valueAndIndices.push({ value: values[i], index: i });
    }
    valueAndIndices.sort((a, b) => {
      return b.value - a.value;
    });
   // console.log('The sorted probability of classified result is', valueAndIndices);

    const topKValues = new Float32Array(topK);
    const topKIndices = new Int32Array(topK);
    for (let i = 0; i < topK; i++) {
      topKValues[i] = valueAndIndices[i].value;
      topKIndices[i] = valueAndIndices[i].index;
    }

    const topKClassesAndProbs = [];
    for (let i = 0; i < topKIndices.length; i++) {
      topKClassesAndProbs.push({
        className: IMAGE_CLASSES[topKIndices[i]],
        probability: topKValues[i]
      });
    }
  //  console.log('the result of prediction is : label , prob ', topKClassesAndProbs);
    return topKClassesAndProbs;
  }

  constructor() {
    this.normalizationOffset = tf.scalar(127.5);

  }
}





