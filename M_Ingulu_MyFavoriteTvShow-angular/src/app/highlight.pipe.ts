import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/Tvshow';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(contentList: Content[], lightByThisType?:string): Content[] {
    console.log("light value: ", lightByThisType);
    //return 'show title';
    return contentList.light(c => {
      if (lightByThisType) {
        return c.type == lightByThisType;
      }  else { 
        return !c.type;
      }
    });
  }

}
