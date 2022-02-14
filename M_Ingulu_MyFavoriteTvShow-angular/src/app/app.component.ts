import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'M_Ingulu_MyFavoriteTvShow-angular';
  show = Tvshow[];

  constructor() {
    this.show = [{

        id: 0,
        title: 'Revenge',
        creator: 'Mike Kelley',
        imgURL: '',
        genre: 'Drama'
      },
      {
        id: 1,
        title: '24',
        creator: 'Joel Surnow',
        imgURL: 'https://en.wikipedia.org/wiki/24_(TV_series)#/media/File:24-Logo.svg',
        genre: 'Drama'
      },
      {
        id: 2,
        title: 'One Tree hill',
        creator: 'Mark Schwan',
        imgURL: 'https://en.wikipedia.org/wiki/One_Tree_Hill_(season_4)#/media/File:One_Tree_Hill_-_Season_4_-_DVD.JPG',
        genre: 'Drama'
      
      },
      {
        id: 3,
        title: 'Prison Break',
        creator: 'Paul Scheuring',
        imgURL: 'https://en.wikipedia.org/wiki/Prison_Break#/media/File:Prison-break-s1-intro.jpg',
        genre: 'Drama'
      },
      {
        id: 4,
        title: 'who killed sara',
        creator: 'Jose Ignacio',
        imgURL: 'https://en.wikipedia.org/wiki/Who_Killed_Sara%3F#/media/File:Who_Killed_Sara?_logo.png',
        genre: 'Thriller',
      },
      {
        id: 5,
        title: 'Private Practice',
        creator: 'Shonda Rhimes',
        imgURL: 'https://en.wikipedia.org/wiki/Private_Practice_(TV_series)#/media/File:Privatepracticelogo.jpg',
        genre: 'american drama',
      },
      {
        id: 6,
        title: 'Vikings',
        creator: 'Michael Hirst',
        imgURL: 'https://en.wikipedia.org/wiki/Vikings_(2013_TV_series)#/media/File:Vikings_Title.png',
        type: 'action',
      },
      {
        id: 7,
        title: 'Bridgerton',
        creator: 'Michael Hirst',
        imgURL: 'https://en.wikipedia.org/wiki/Bridgerton#/media/File:Bridgerton_Title_Card.png',
      }];

      this.title = 'Header1';

      let creator: any;

      creator ={
        value: 'Joel Surnow',
        position: 'creator'
      };

      creator = 1;
  }

  updatePage(cardNameOnTheTypescriptSide: string): void {
    console.log("We did it, ", cardNameOnTheTypescriptSide);
    cardNameOnTheTypescriptSide = "somethingelse"
    console.log("after I tried changing it, ", cardNameOnTheTypescriptSide);

    this.title = "Changed it from the submit button";
  }


}
