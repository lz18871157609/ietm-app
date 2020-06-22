import { Component, OnInit, ViewChild } from '@angular/core';
import { Toast } from '@ionic-native/toast/ngx';
import { ToastController, ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FileTransfer, FileTransferObject} from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Logger } from 'src/app/common/logger/logger';
import { Zip } from '@ionic-native/zip/ngx';
@Component({
  selector: 'app-manuals-modal',
  templateUrl: './add-manuals-modal.html',
  styleUrls: ['./add-manuals-modal.scss'],
})
export class AddManualsModalComponent implements OnInit {
 @ViewChild('inputfile', {static: false}) inputfile: any;
 fatherCheck = false;
 FileZipProgress = 0.45;
 showProgress = false;
 fileName = '';
 fileTransfer: FileTransferObject = this.transfer.create();
  constructor(
    private toast: Toast,
    private toastController: ToastController,
    private alertController: AlertController,
    private fileChooser: FileChooser,
    private transfer: FileTransfer,
    private file: File,
    private filePath: FilePath,
    private modalController: ModalController,
    private logger: Logger,
    private zip: Zip
  ) { }

  ngOnInit() {
    this.fatherCheck = false;
    if (this.FileZipProgress === 0) {
      this.showProgress = false;
    } else {
      this.showProgress = true;
    }
  }
  dismissModal() {
    this.modalController.dismiss();
  }

  handleFirstNameValue(event) {

  }

  checkSystem() {
    if (this.fatherCheck === true) {
      this.fatherCheck = false;
    } else {
      this.fatherCheck = true;
    }
  }

  /**
   * 选择数据包上传移动到指定目录
   */
  chooseFile(event) {
    this.fileChooser.open({ mime: 'application/zip' }).then(url => {
      this.resolveUri(url).then(path => {
        this.file.resolveLocalFilesystemUrl(path).then(f => {
          // Android：外部存储（SD卡）根目录。
          let oldPath = f.fullPath.substring(0, f.fullPath.lastIndexOf('/') + 1);
          let oldFileName = f.fullPath.substring(f.fullPath.lastIndexOf('/') + 1);
          this.file.checkDir(this.file.externalRootDirectory, 'ietm/pubdata').then(data => {
            this.logger.log('检测是存在此文件夹', data);
            if (data === true) {
              this.file.copyFile(this.file.externalRootDirectory + oldPath, oldFileName, this.file.externalRootDirectory + 'ietm/pubdata', oldFileName).then(copydata => {
                this.logger.log('移动文件', copydata);
                this.fileName = oldFileName;
                this.showProgress = true;
                this.unzip(this.file.externalRootDirectory + 'ietm/pubdata/', oldFileName);
              }).catch(error => {
                this.logger.log('移动文件报错', error);
              });
            }
          }).catch(e => {
            this.logger.log('检查文件路径报错', e);
          });
        });
      });
    });
  }


  /**
   * 数据包解压缩
   */
  unzip(url, file) {
    this.zip.unzip(url + file, url, (progress) => this.unZipProgress(progress)).then((result) => {
      if(result === 0) {
        // 解压完成后 删除压缩包
        this.logger.log('解压路径', url);
        this.file.removeFile(url, file).then(remove => {
          this.logger.log('删除成功！', remove);
        })
      }
      if(result === -1) { console.log('FAILED'); }
 });
  }
  
  /**
   * 解压缩进度
   */
  unZipProgress(progress) {
    this.FileZipProgress = progress.loaded / progress.total;
  }
  /**
   * 解析uri
   * @param uri 
   */
  resolveUri(uri: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.filePath.resolveNativePath(uri).then(filePath => {
        resolve(filePath);
      }).catch(err => {
        reject(err);
      });
    });
  }
}
 