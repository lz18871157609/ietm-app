import { Component, OnInit, ComponentFactoryResolver, ComponentFactory, ViewContainerRef, ViewChild, Input } from '@angular/core';
import { DynamicDmComponentService } from '../../services/dynamic-dm-component.service';
import { UTILS } from 'src/utils/utils';
import * as $ from 'jquery';

@Component({
  selector: 'app-person-category',
  templateUrl: './person-category.component.html',
  styleUrls: ['./person-category.component.scss'],
})
export class PersonCategoryComponent implements OnInit {
  xmlTag = 'personCategoryTemp';
  text = '';
  @Input('dataSource') dataSource;
  @ViewChild('personCategoryTemp', {static: true, read: ViewContainerRef}) personCategoryTemp: ViewContainerRef;
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
    const nodeCp = this.personCategoryTemp.createComponent(nodeComp);
    nodeCp.instance.dataSource = node;
  }
}
