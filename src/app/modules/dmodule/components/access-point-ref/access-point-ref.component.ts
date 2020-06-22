import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { DynamicDmComponentService } from '../../services/dynamic-dm-component.service';
import { UTILS } from '../../../../../utils/utils';
import * as $ from 'jquery';

@Component({
  selector: 'app-access-point-ref',
  templateUrl: './access-point-ref.component.html',
  styleUrls: ['./access-point-ref.component.scss'],
  providers: [DynamicDmComponentService]
})
export class AccessPointRefComponent implements OnInit {

  text = '';
  @Input('dataSource') dataSource: any;
  @ViewChild('contentTemp', {static: false, read: ViewContainerRef}) contentTemp: ViewContainerRef;
  constructor(
    private resolve: ComponentFactoryResolver,
    private dynamicComs: DynamicDmComponentService
  ) { }

  ngOnInit() {
    if (this.dataSource[0].children.length > 0) {
      this.seelctNode(this.dataSource);
    } else {
      this.handlerCurrent(this.dataSource[0]);
    }
  }

  handlerCurrent(current) {
    this.text = current.textContent;
  }

  seelctNode(rootData) {
    const self = this;
    rootData.children().each(function() {
      self.handlerNode($(this));
    });
  }

  handlerNode(dom) {
    let nodeStr = `${dom[0].nodeName}`;
    const nodeCom = UTILS.strFirst2Uppercase(nodeStr);
    nodeStr =  nodeCom === 'DisplacementComponent' ? 'displacement' : nodeStr;
    this.createComponment(dom, this.dynamicComs.loadComponentCallBack(nodeStr)[nodeCom]);
  }

  createComponment(node, nodeComponent) {
    const nodeComp: ComponentFactory<any> = this.resolve.resolveComponentFactory(nodeComponent);
    const nodeCp = this.contentTemp.createComponent(nodeComp);
    nodeCp.instance.dataSource = node;
  }
}
