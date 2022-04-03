import { Component } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { tvshowServices } from './tvshowServices';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'M_Ingulu_MyFavoriteTvShow-angular';
  sometvshow?: Content;
  constructor(private mService: tvshowServices) { }

  ngOnInit(): void{
    this.mService.getSingletvshow(1).subscribe(tvshow => this.sometvshow = tvshow);
  }
  displaytvshowItem(id: string): void{
    this.mService.getSingletvshow(parseInt(id)).subscribe(tvshow => this.sometvshow = tvshow);
  }
  btn(id:any) {
    this.mService.getsometvshow(id).subscribe((getContent: any) => this.getsometvshow = getContent);
  }
}
