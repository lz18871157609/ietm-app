import { Component, OnInit, ComponentFactoryResolver, ComponentFactory, ViewContainerRef, ViewChild, Input } from '@angular/core';
import { DynamicDmComponentService } from '../../services/dynamic-dm-component.service';
import { UTILS } from 'src/utils/utils';
import * as $ from 'jquery';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';
import { File } from '@ionic-native/file/ngx';
@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.scss'],
})
export class GraphicComponent implements OnInit {
  src: any;
  xmlTag = 'graphicTemp';
  text = '';
  @Input('dataSource') dataSource;
  @ViewChild('graphicTemp', {static: true, read: ViewContainerRef}) graphicTemp: ViewContainerRef;
  constructor(
    private resolve: ComponentFactoryResolver,
    private dynamicComs: DynamicDmComponentService,
    private photoViewer: PhotoViewer,
    private file: File,
  ) { }

  ngOnInit() {
    if (this.dataSource[0].children.length > 0) {
      this.selectNode(this.dataSource);
    } else {
      this.handlerCurrent(this.dataSource[0]);
    }
    this.file.readAsDataURL(this.file.externalRootDirectory + 'ietm/pubdata/samples_20170115/', 'ICN-C0419-S1000D0360-001-01.PNG').then(response => {
      this.src = response;
    });
  }
  onTap(event, src) {
    this.photoViewer.show(this.src );
  }
  handlerCurrent(current) {
    this.text = current.textContent;
  }
  /**
   * select tag
   * @param rootData
   */
  selectNode(rootData) {
    const self = this;
    rootData.children().each(function(){
      self.handlerNode($(this));
    });

  }
  /**
   * handle node
   * @dom node
   */
  handlerNode(dom) {
    let nodeStr = `${dom[0].nodeName}`;
    const nodeCom = UTILS.strFirst2Uppercase(nodeStr);
    nodeStr = nodeCom === 'DisplacementComponent' ? 'displacement' : nodeStr;
    this.createComponent(dom, this.dynamicComs.loadComponentCallBack(nodeStr)[nodeCom])
  }
  createComponent(node, nodeComponent) {
    const nodeComp: ComponentFactory<any> = this.resolve.resolveComponentFactory(nodeComponent);
    const nodeCp = this.graphicTemp.createComponent(nodeComp);
    nodeCp.instance.dataSource = node;
  }
}
