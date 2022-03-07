import { Component, OnInit } from '@angular/core';
import { ContentListComponent } from '../content-list/content-list.component';
//import {Contentinterface} from "../helper-files/content-interface";

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  myList: ContentListComponent;
  @Input() myList.addItem: myList;
  specialColor = 'blue';

  constructor(){
    this.myList = new ContentListComponent();
    console.log("my list contains these items: ", this.myList.items);
    this.myList = { id: 0, name: '', body: '', imageUrl: ''};


    this.myList.addItem({
      id: 0,
      title: "Prison Break",
      description: "Tv show",
      creator: "Paul Scheuring",
      imgURL: "https://en.wikipedia.org/wiki/Prison_Break#/media/File:Prison-break-s1-intro.jpg"
  });

  this.myList.addItem({
    id: 1,
    title: "One Tree Hill",
    description: "Teenager show",
    creator: "Mark Schwahn",
    imgURL: "https://en.wikipedia.org/wiki/One_Tree_Hill_(season_4)#/media/File:One_Tree_Hill_-_Season_4_-_DVD.JPG",
    type: "drama"
  });

  this.myList.addItem({
    id: 2,
    title: "24 hours",
    description: "Tv show",
    creator: "Joel Surnow",
    imgURL: "https://en.wikipedia.org/wiki/24_(TV_series)#/media/File:24-Logo.svg",
    type: "american drama"
  });

  console.log("my list contains these items: ", this.myList.items);


  console.log("The length of the array is:  ", this.myList.numberOfItems());

  console.log("THe html output is: ", this.myList.getHtml(0));

  // myList.items = [];
}

  ngOnInit(): void {
  }
}
