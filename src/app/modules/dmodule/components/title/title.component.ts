import { Component, OnInit, ComponentFactoryResolver, ComponentFactory, ViewContainerRef, ViewChild, Input } from '@angular/core';
import { DynamicDmComponentService } from '../../services/dynamic-dm-component.service';
import { UTILS } from 'src/utils/utils';
import * as $ from 'jquery';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit {
  currentId: any;
  xmlTag = 'titleTemp';
  text = '';
  @Input('dataSource') dataSource;
  @ViewChild('titleTemp', {static: true, read: ViewContainerRef}) titleTemp: ViewContainerRef;
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
    rootData.children().each(function(i){
      let childIndex = rootData.childIndex + '-' + i;
      self.handlerNode($(this), childIndex);
    });

  }
  /**
   * handle node
   * @dom node
   */
  handlerNode(dom, childIndex) {
    let nodeStr = `${dom[0].nodeName}`;
    const nodeCom = UTILS.strFirst2Uppercase(nodeStr);
    nodeStr = nodeCom === 'DisplacementComponent' ? 'displacement' : nodeStr;
    this.createComponent(dom, this.dynamicComs.loadComponentCallBack(nodeStr)[nodeCom], childIndex)
  }
  createComponent(node, nodeComponent, childIndex) {
    const nodeComp: ComponentFactory<any> = this.resolve.resolveComponentFactory(nodeComponent);
    const nodeCp = this.titleTemp.createComponent(nodeComp);
    nodeCp.instance.dataSource = Object.assign(node, {parentType: this.xmlTag, childIndex});
  }

}
