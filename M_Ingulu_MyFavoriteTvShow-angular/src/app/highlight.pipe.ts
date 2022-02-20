import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(contentList: Content[], highlightByThisType?:string): Content[] {
    console.log("highlight value: ", highlightByThisType);
    //return 'show title';
    return contentList.highlight(c => {
      if (highlightByThisType) {
        return c.type == highlightByThisType;
      }  else { 
        return !c.type;
      }
    });
  }

}
