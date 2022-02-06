import { Component, OnInit } from '@angular/core';
import {Contentlist} from "../helper-files/content-list";

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  myList: Contentlist;

  constructor(){
    this.myList = new Contentlist();
    console.log("my list contains these items: ", this.myList.items);

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
