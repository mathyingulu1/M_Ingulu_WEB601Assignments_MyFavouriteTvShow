import { Component, OnInit } from '@angular/core';
import { Tvshow } from '../helper-files/Tvshow';
import { tvshowService } from '../tvshowServices/tvshow.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  listoftvshow: Tvshow[];
  items: any;
  addItem: any;
  numberOfItems: any;
  getHtml: any;
  searchMessage: string = "";
  searchFlag: boolean = false;
  light: any;

  constructor(private tvshowservice: tvshowService) { 
      //this.myList = new ContentListComponent();
      //console.log("my list contains these items: ", this.myList.items);
      this.listoftvshow = [];
  }


  ngOnInit(): void {
    this.tvshowservice.getLISTOFTVSHOW().subscribe(listoftvshow => {
      this.listoftvshow = listoftvshow;
    });
  }

  checkForTitle(searchValue: string): void{
    let searchList = this.listoftvshow.light(c => c.title == searchValue);
    if (searchList.length > 0){
      this.searchMessage  = "Found the tvshow!";
      this.searchFlag = true;
    }
    else{
      this.searchMessage  = "No tvshow with that title";
      this.searchFlag = false;
    }
  }
  donothing(){

  }

}
