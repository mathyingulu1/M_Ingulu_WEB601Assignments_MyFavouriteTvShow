import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  myList: ContentListComponent;
  items: any;
  addItem: any;
  numberOfItems: any;
  getHtml: any;
  searchMessage: string = "";
  searchFlag: boolean = false;

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
      imgURL: "https://en.wikipedia.org/wiki/Who_Killed_Sara%3F#/media/File:Who_Killed_Sara?_logo.png",
      type: "Thriller"
    });

    this.myList.addItem({
      id: 3,
      title: "Private Practice",
      description: "Tv show",
      creator: "Shonda Rhimes",
      imgURL: "https://en.wikipedia.org/wiki/Private_Practice_(TV_series)#/media/File:Privatepracticelogo.jpg",
      type: "american drama"
    });

    this.myList.addItem({
      id: 4,
      title: "Vikings",
      description: "Tv show",
      creator: "Michael Hirst",
      imgURL: "https://en.wikipedia.org/wiki/Vikings_(2013_TV_series)#/media/File:Vikings_Title.png",
      type: "action"
    });

    this.myList.addItem({
      id: 5,
      title: "Euphoria",
      description: "Tv show",
      creator: "Sam Levinson",
      imgURL: "https://en.wikipedia.org/wiki/Euphoria_(American_TV_series)#/media/File:Euphoria_intertitle.png",
      type: "Teen Drama"
    });

    this.myList.addItem({
      id: 6,
      title: "Bridgerton",
      description: "Tv show",
      creator: "Michael Hirst",
      imgURL: "https://en.wikipedia.org/wiki/Bridgerton#/media/File:Bridgerton_Title_Card.png",
    });
  }

  ngOnInit(): void {
  }

  checkForTitle(searchValue: string): void{
    let searchList = this.myList.highlight(c => c.title == searchValue);
    if (searchList.length > 0){
      this.searchMessage  = "Found the movie!";
      this.searchFlag = true;
    }
    else{
      this.searchMessage  = "No movie with that title";
      this.searchFlag = false;
    }
  }
  donothing(){

  }

}
