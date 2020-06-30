import { Component, OnInit, ViewChild } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { ToastController, AlertController, ModalController } from '@ionic/angular';
import { Crop } from '@ionic-native/crop/ngx';
import { Base64ToGallery } from '@ionic-native/base64-to-gallery/ngx';
import { Base64 } from '@ionic-native/base64/ngx';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';
import { Logger} from '../../../../common/logger/logger';
import { File } from '@ionic-native/file/ngx';
import { ImageClassifyService } from 'src/app/services/image-classify/image-classify.service';

@Component({
  selector: 'app-distinguish',
  templateUrl: './distinguish.component.html',
  styleUrls: ['./distinguish.component.scss'],
})
export class DistinguishComponent implements OnInit {
  recognizeData: any;
  modelInitComplete: boolean;
@ViewChild('showPicture', {static: false}) showPicture: any;
@ViewChild('smallpic', {static: false}) smallpic: any;
  options: CameraOptions = {
    quality: 10,
    destinationType: this.camera.DestinationType.FILE_URI,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE
  }
  imagesOptions: ImagePickerOptions = {
    maximumImagesCount: 1,
  }
  constructor(
    private camera: Camera,
    private alertController: AlertController,
    private crop: Crop,
    private base64ToGallery: Base64ToGallery,
    private base64: Base64,
    private imagePicker: ImagePicker,
    private logger: Logger,
    private file: File,
    private imagePredictService: ImageClassifyService
  ) { }

  ngOnInit() {
    // 初始化模型
    this.imagePredictService.initModel().then(() => {
      this.modelInitComplete = true;
    });
  }
  getCamera() {
    this.camera.getPicture(this.options).then((imageData) => {
      let base64Image = 'data:image/jpeg;base64,' + imageData;
     /*  this.showPicture.nativeElement.src = imageData;
      this.showPicture.nativeElement.style.display = 'block'; */
      this.getCrop(imageData);
    }, (err) => {
      console.log(err);
    });
  }
  /**
   * 选择图片
   */
  choosePic() {
    this.imagePicker.hasReadPermission().then(per => {
      if (per === true) {
        this.imagePicker.getPictures({maximumImagesCount: 1}).then(results => {
          // tslint:disable-next-line: prefer-for-of
          for (let i = 0; i < results.length; i++) {
            this.logger.log(results[i]);
            this.getCrop(results[i]);
        }
        }).catch(err => {
          this.file.writeExistingFile(this.file.externalRootDirectory + 'ietm/logs', 'ietm-log.txt', err).then(logs => {
            console.log(logs);
          })
          this.logger.log(err);
        })
      } else {

      }
    })
  }

  getCrop(src) {
        this.crop.crop(src, { quality: 75, targetWidth: -1, targetHeight: -1 }).then(
          newImage => {
          this.base64.encodeFile(newImage).then((base64File: string) => {
            this.showPicture.nativeElement.src = base64File;
            this.showPicture.nativeElement.style.display = 'block';
            this.logger.log(this.showPicture.nativeElement.src);
            setTimeout(() => {
              this.recognizeImg();
            }, 500);
          });
          },
          error => {
            console.log(error);
          }
        );
  }

   /**
   * 图像识别
   */
  recognizeImg() {
    const that = this;
    // console.log(' 使用识别模型，断言图像标签');
    const imgEl = document.getElementById('showPicture') as HTMLImageElement;
    that.imagePredictService.predict(imgEl).then((result) => {
      this.logger.log('识别结果', result);
      that.recognizeData = result;
    });
  }

}
