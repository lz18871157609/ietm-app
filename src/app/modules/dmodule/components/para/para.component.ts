import { Component, OnInit, ViewContainerRef, ViewChild, ComponentFactoryResolver, ComponentFactory, Input } from '@angular/core';
import { DynamicDmComponentService } from '../../services/dynamic-dm-component.service';
import { UTILS } from 'src/utils/utils';
import { Logger } from 'src/app/common/logger/logger';
import * as $ from 'jquery';
@Component({
  selector: 'app-para',
  templateUrl: './para.component.html',
  styleUrls: ['./para.component.scss'],
  providers: [DynamicDmComponentService]
})
export class ParaComponent implements OnInit {
  xmlTag = 'para';
  text = '';
  currentId = '';
  @Input('dataSource') dataSource;
  @ViewChild('paraTemp', { static: true, read: ViewContainerRef }) paraTemp: ViewContainerRef;
  constructor(
    private resolve: ComponentFactoryResolver,
    private dynamicComs: DynamicDmComponentService,
    private logger: Logger
  ) { }

  ngOnInit() {
    this.logger.log('para', this.dataSource);
    this.currentId = `${this.xmlTag}${this.dataSource.childIndex}`;
    if (this.dataSource[0].children.length > 0) {
      this.selectNode(this.dataSource);
      this.showPara(this.dataSource);
    } else {
      this.handlerCurrent(this.dataSource[0]);
    }
  }
  handlerCurrent(current) {
    this.text = current.textContent;
  }

  showPara(data) {
    let that = this;
    data.children().each(function (i) {
      that.text = data[0].textContent;
    });
  }
  /**
   * select tag
   * @param rootData
   */
  selectNode(rootData) {
    const self = this;
    rootData.children().each(function (i) {
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
    let nodeCom = UTILS.strFirst2Uppercase(nodeStr);
    this.createComponent(dom, this.dynamicComs.loadComponentCallBack(nodeStr)[nodeCom], childIndex)
  }
  createComponent(node, nodeComponent, childIndex) {
    const nodeComp: ComponentFactory<any> = this.resolve.resolveComponentFactory(nodeComponent);
    const nodeCp = this.paraTemp.createComponent(nodeComp);
    nodeCp.instance.dataSource = Object.assign(node, { parentType: this.xmlTag, childIndex });
  }
}
