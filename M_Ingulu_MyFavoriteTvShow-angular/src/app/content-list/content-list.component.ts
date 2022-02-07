import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  myList: ContentListComponent;

  constructor() { 
      this.myList = new ContentListComponent();
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

    this.myList.addItem({
      id: 2,
      title: "who killed sara",
      description: "Tv show",
      creator: "Jose Ignacio",
      imgURL: "https://en.wikipedia.org/wiki/24_(TV_series)#/media/File:24-Logo.svg",
      type: "Thriller"
    });

    this.myList.addItem({
      id: 2,
      title: "Private Practice",
      description: "Tv show",
      creator: "Shonda Rhimes",
      imgURL: "https://en.wikipedia.org/wiki/24_(TV_series)#/media/File:24-Logo.svg",
      type: "american drama"
    });

    this.myList.addItem({
      id: 2,
      title: "Vikings",
      description: "Tv show",
      creator: "Michael Hirst",
      imgURL: "https://en.wikipedia.org/wiki/24_(TV_series)#/media/File:24-Logo.svg",
      type: "action"
    });
  }

  ngOnInit(): void {
  }

}
