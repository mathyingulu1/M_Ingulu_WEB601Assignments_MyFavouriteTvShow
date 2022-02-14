import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(show: Tvshow, dType?: string): string {
    //return 'show title';
    return show.type ?? dType ?? "Genre";
  }

}
