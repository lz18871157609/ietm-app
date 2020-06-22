import { Component, OnInit } from '@angular/core';
import { FileChooser } from '@ionic-native/file-chooser/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
@Component({
  selector: 'app-feed-back',
  templateUrl: './feed-back.component.html',
  styleUrls: ['./feed-back.component.scss'],
})
export class FeedBackComponent implements OnInit {

  constructor(
    private fileChooser: FileChooser,
    private filePath: FilePath
  ) { }

  ngOnInit() {

  }

  chioseFile() {
    this.fileChooser.open().then(uri => {
      this.filePath.resolveNativePath(uri).then( result => {
        // 调用文件上传(此方法需要自行编写)
       // this.uploadAttachment(result);
      });
    });
  }
}
