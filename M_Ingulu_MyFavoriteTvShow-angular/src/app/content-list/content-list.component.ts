import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/Tvshow';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  myList: Content[];
  items: any;
  addItem: any;
  numberOfItems: any;
  getHtml: any;
  searchMessage: string = "";
  searchFlag: boolean = false;
  light: any;

  constructor() { 
      //this.myList = new ContentListComponent();
      //console.log("my list contains these items: ", this.myList.items);

      this.myList = [{
        id: 0,
        title: "Prison Break",
        description: "A Tv show in a tv show",
        creator: "Paul Scheuring",
        imgURL: "https://en.wikipedia.org/wiki/Prison_Break#/media/File:Prison-break-s1-intro.jpg"
        tags: ["tvshowinatvshow", "Dr house"]
    }, {

      id: 1,
      title: "One Tree Hill",
      description: "Teenager show",
      creator: "Mark Schwahn",
      imgURL: "https://en.wikipedia.org/wiki/One_Tree_Hill_(season_4)#/media/File:One_Tree_Hill_-_Season_4_-_DVD.JPG",
      //type: "drama"
    }, {

      id: 2,
      title: "24 hours",
      description: "Tv show",
      creator: "Joel Surnow",
      imgURL: "https://en.wikipedia.org/wiki/24_(TV_series)#/media/File:24-Logo.svg",
      type: "american drama"
      tags: ["lotsOfMainCharacters", "firstofmany"]
    }, {

      id: 3,
      title: "who killed sara",
      description: "Tv show",
      creator: "Jose Ignacio",
      imgURL: "",
      type: "Thriller"
      
    }, {

      id: 4,
      title: "Private Practice",
      description: "Tv show",
      creator: "Shonda Rhimes",
      imgURL: "",
      type: "american drama"
    }, {

      id: 5,
      title: "Vikings",
      description: "Tv show",
      creator: "Michael Hirst",
      imgURL: "",
      type: "action"
    }, {

      id: 6,
      title: "Euphoria",
      description: "Tv show",
      creator: "Sam Levinson",
      imgURL: "",
      type: "Teen Drama"
    }, {

      id: 7,
      title: "Bridgerton",
      description: "Tv show",
      creator: "Michael Hirst",
      imgURL:"",
    }];
  }

  ngOnInit(): void {
  }

  checkForTitle(searchValue: string): void{
    let searchList = this.myList.light(c => c.title == searchValue);
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
