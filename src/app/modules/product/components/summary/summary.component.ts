import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Logger } from '../../../../common/logger/logger';
import { HTTP } from '@ionic-native/http/ngx';
import { File } from '@ionic-native/file/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import * as $ from 'jquery';
import { ModalController } from '@ionic/angular';

declare var UnityLoader: any;
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  summarySource: any;
  gameInstance: any;
  progress: any;
  src: any;
  constructor(
    private http: HTTP,
    private logger: Logger,
    private file: File,
    private filePath: FilePath,
    private modalController: ModalController,
    private photoViewer: PhotoViewer
  ) { }

  ngOnInit() {
    /* const xmlparse = new DOMParser();
    this.file.readAsText(this.file.externalRootDirectory + 'ietm/pubdata/samples_20170115', 'PMC-S1000DBIKE-B6865-EPWG1-00_001-00_en-US.XML').then(response => {
      const xml = xmlparse.parseFromString(response.toString(), 'text/xml');
      this.summarySource = $(xml);
    }); */
   // this.initUnity();
   // 展示图片
   this.file.readAsDataURL(this.file.externalRootDirectory + 'ietm/pubdata/samples_20170115/', 'ICN-C0419-S1000D0360-001-01.PNG').then(response => {
     this.src = response;
   });
  }
  onTap(event) {
    this.photoViewer.show(this.src );
    this.logger.log(event);
  }
  initUnity() {
    this.logger.log('初始化Unitybox');
    const gameContainer = $("<div id='gameContainer' class='gameContainer' ></div>");
    this.file.checkFile(this.file.externalRootDirectory + 'ietm/pubdata/samples_20170115/DataModule/Build/', 'build.json').then(res => {
      this.logger.log('找到build文件', res);
      if (res === true) { 
        $('#unity-box').append(gameContainer);
        setTimeout(() => {
          this.loadUnity();
        }, 300);
      }
    }).catch(err => {
      this.logger.log('未找到该文件', err);
    });
  }

  loadUnity() {
    this.logger.log('加载初始化材质模型');
    this.gameInstance = UnityLoader.instantiate('gameContainer', '../../../../../assets/js/UnityWebGL/Build/build.json', {
    // this.gameInstance = UnityLoader.instantiate('gameContainer', this.file.externalRootDirectory + 'ietm/pubdata/samples_20170115/DataModule/Build/build.json', {
      onProgress: (instance, Progress) => {
        this.logger.log('加载进度', Progress);
        this.progress = Progress;
      }, tabindex: 1
    });
    this.logger.log('unity', this.gameInstance);
    setTimeout(() => {
      this.logger.log('加载icn');
      this.gameInstance.LoadSceneFromAssetBundle('../../../../../assets/js/UnityWebGL/StreamingAssets/AssetBundles/icn-rybj-a-5020203-a-d00000216-00001-a-02-27.unityweb');
      // this.gameInstance.LoadSceneFromAssetBundle(this.file.externalRootDirectory + 'ietm/pubdata/samples_20170115/DataModule/StreamingAssets/AssetBundles/icn-rybj-a-5020203-a-d00000216-00001-a-02-20.unityweb');
    }, 10000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.logger.log('changes', changes);
    this.logger.log('progress', this.progress);
  }
  ngOnDestroy(): void {
    this.gameInstance.SetVisible(false);
    this.gameInstance.LoadDefaultScene();
  }
}