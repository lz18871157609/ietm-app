import { Component, OnInit, ComponentFactoryResolver, ComponentFactory, ViewContainerRef, ViewChild, Input } from '@angular/core';
import { DynamicDmComponentService } from '../../services/dynamic-dm-component.service';
import { UTILS } from 'src/utils/utils';
import * as $ from 'jquery';

@Component({
  selector: 'app-faulty-sub-system',
  templateUrl: './faulty-sub-system.component.html',
  styleUrls: ['./faulty-sub-system.component.scss'],
})
export class FaultySubSystemComponent implements OnInit {
  xmlTag = 'faultySubSystemTemp';
  text = '';
  @Input('dataSource') dataSource;
  @ViewChild('faultySubSystemTemp', {static: true, read: ViewContainerRef}) faultySubSystemTemp: ViewContainerRef;
  constructor(
    private resolve: ComponentFactoryResolver,
    private dynamicComs: DynamicDmComponentService
  ) { }

  ngOnInit() {
    if (this.dataSource[0].children.length > 0) {
      this.selectNode(this.dataSource);
    } else {
      this.handlerCurrent(this.dataSource[0]);
    }
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
    const nodeCp = this.faultySubSystemTemp.createComponent(nodeComp);
    nodeCp.instance.dataSource = node;
  }
}