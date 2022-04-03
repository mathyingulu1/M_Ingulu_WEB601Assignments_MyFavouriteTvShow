import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { tvshowServices } from '../tvshowServices';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  searchMessage: string = "";
  searchFlag: boolean = false;
  tvshowList: Content[];
  constructor(private tvshowServices: tvshowServices) {
    this.tvshowList = [];
  }

  ngOnInit(): void {
    this.tvshowServices.getMovieList().subscribe(tvshowList => {
      this.tvshowList = tvshowList;
    });
  }

  checkForTitle(searchValue: string): void {
    let searchList = this.tvshowList.highlight(c => c.title == searchValue);
    if (searchList.length > 0) {
      this.searchMessage = "Found the tvshow!";
      this.searchFlag = true;
    }
    else {
      this.searchMessage = "No tvshow with that title";
      this.searchFlag = false;
    }
  }
  addContentToList(newContentItem: Content): void {
   

    this.tvshowServices.gettvshowList().subscribe(this.tvshowList => {
      this.tvshowList = this.tvshowList;
    });
  }
}
