import { Component, OnInit, Input, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentFactory } from '@angular/core';
import { DynamicDmComponentService } from '../../services/dynamic-dm-component.service';
import { UTILS } from 'src/utils/utils';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
  providers: [DynamicDmComponentService]
})
export class ContentComponent implements OnInit {
  xmlTag = 'content';
  childIndex = '0';
  $content: any;
  @Input() dataSource;
  @ViewChild('container', {static: false, read: ViewContainerRef}) container: ViewContainerRef;
  constructor(
    private resolve: ComponentFactoryResolver,
    private dynamicComs: DynamicDmComponentService
  ) { }

  ngOnInit() {}
  ngOnChanges(changes: any): void {
   // this.container.clear();
    if (changes['dataSource'].currentValue !== undefined) {
      // xml
      let doc = changes.dataSource.currentValue;
      this.selectNode(doc, this.xmlTag);
    }
  }
  /**
   * select tag
   * @param rootData
   * @param parentXmlTag
   */
  selectNode(rootData, parentXmlTag) {
    const self = this;
    if (rootData.children() && (rootData.children()[0].nodeName === 'dmNode'
    || rootData.children()[0].nodeName === 'dmIf'
    || rootData.children()[0].nodeName === 'isolationStepQuestion'
    || rootData.children()[0].nodeName === 'isolationStepAnswer'
    || rootData.children()[0].nodeName === 'action'
    ) ) {
      rootData.children().each(function(i) {
        let childIndex = self.childIndex + '-' + i;
        self.handlerNode($(this), childIndex);
      });
    }
    
    this.$content = rootData.find(parentXmlTag);
    // console.log(this.$content[0].children());
    
    this.$content.children().each(function(i){
      let childIndex = self.childIndex + '-' + i;
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
    const nodeCp = this.container.createComponent(nodeComp);
    nodeCp.instance.dataSource = Object.assign(node, { parentType: this.xmlTag, childIndex });
  }
}
