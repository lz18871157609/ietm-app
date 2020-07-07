import { Component, OnInit, SimpleChanges, ViewChild, HostListener, ElementRef } from '@angular/core';
import { Logger } from '../../../../common/logger/logger';
import { HTTP } from '@ionic-native/http/ngx';
import { File } from '@ionic-native/file/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import * as $ from 'jquery';
import { ModalController, NavController, NavParams, MenuController, PopoverController, IonicModule} from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { FeaturesComponent } from '../modals/features/features.component';
import { EventService } from '../../../../services/event.service';
declare var UnityLoader: any;
@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
  providers: [NavParams]
})
export class SummaryComponent implements OnInit {
  summarySource: any;
  gameInstance: any;
  progress: any;
  src: any;
  profile = false;
  @ViewChild('summary', {static: true}) summary: any;
  constructor(
    private http: HTTP,
    private logger: Logger,
    private file: File,
    private filePath: FilePath,
    private modalController: ModalController,
    private photoViewer: PhotoViewer,
    private activatedRoute: ActivatedRoute,
    private navController: NavController,
    private navParams: NavParams,
    private menuController: MenuController,
    private popoverController: PopoverController,
    private eventService: EventService,
    private clipboard: Clipboard,
    private element: ElementRef
  ) { }

  ngOnInit() {
    /* const xmlparse = new DOMParser();
    this.file.readAsText(this.file.externalRootDirectory + 'ietm/pubdata/samples_20170115', 'PMC-S1000DBIKE-B6865-EPWG1-00_001-00_en-US.XML').then(response => {
      const xml = xmlparse.parseFromString(response.toString(), 'text/xml');
      this.summarySource = $(xml);
    }); */
    this.eventService.event.on('profile', (ev) => {
      if (ev === 'profile') {
        this.profile = true;
      }
    });
    const xmlparse = new DOMParser();
    this.activatedRoute.queryParams.subscribe(params => {
      this.file.readAsText(this.file.externalRootDirectory + 'ietm/pubdata/samples_20170115/', params.hrefxml).then(response => {
        const xml = xmlparse.parseFromString(response.toString(), 'text/xml');
        const xmlDoc = $.parseXML(response);
        this.summarySource = $(xml);
      });
    });
  /*   if (this.navParams.get('hrefxml')) {
      
    } */
   // this.initUnity();
   // 展示图片
 /*   this.file.readAsDataURL(this.file.externalRootDirectory + 'ietm/pubdata/samples_20170115/', 'ICN-C0419-S1000D0360-001-01.PNG').then(response => {
     this.src = response;
   }); */
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


  /**
   * 注释
   */
  onClick(ev) {
    const that = this;
    if (this.profile) {
      let icon = document.createElement('ion-icon');
      icon.setAttribute('class', 'product-info-chip-label-icon');
      icon.setAttribute('name', 'bookmark');
      icon.onclick = function(event) { that.showPop(event); };
      icon.setAttribute('style', 'top: ' + ev.offsetY + 'px; left: ' + ev.offsetX + 'px; position: relative;');
      this.summary.el.appendChild(icon);
      this.profile = false;
      /* console.log(ev);
      this.profile = false;
       */
    }
  }

  /**
   * 显示注释pop
   * @param e
   */
  async showPop(e) {
    const popover = await this.popoverController.create({
      component: FeaturesComponent,
      componentProps: {props: e},
      event: e,
      cssClass: 'feature-pop',
      translucent: true
    });
    return popover.present();
  }
  /**
   * 标记
   */
  swipe(event) {
  }

  @HostListener('press', ['$event'])
  onPress() {
    let hostElement = this.element.nativeElement;   //宿主元素
    let copyText = hostElement.innerText;          //宿主元素内的文本
    console.log(copyText);
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.logger.log('changes', changes);
    this.logger.log('progress', this.progress);
  }
  ngOnDestroy(): void {
   // this.gameInstance.SetVisible(false);
   // this.gameInstance.LoadDefaultScene();
  }
}