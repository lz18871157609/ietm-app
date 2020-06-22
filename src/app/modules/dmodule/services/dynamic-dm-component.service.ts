import { Injectable } from '@angular/core';
import { UTILS} from '../../../../utils/utils';
@Injectable({
  providedIn: 'root'
})
export class DynamicDmComponentService {

constructor() { }

loadComponentCallBack(componentTag) {
  let componentPath = UTILS.str2label(componentTag);
  return require(`../components/${componentPath}/${componentPath}.component`);
}
}
