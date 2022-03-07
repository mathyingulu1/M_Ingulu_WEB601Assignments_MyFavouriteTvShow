import { Component } from '@angular/core';
import { Tvshow} from '../helper-files/Tvshow';

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
        tags: ["originals"]
      },
      {
        id: 1,
        title: '24',
        creator: 'Joel Surnow',
        imgURL: 'https://en.wikipedia.org/wiki/24_(TV_series)#/media/File:24-Logo.svg',
        genre: 'Drama'
        tags: ["Empire"]
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

  let ourPromise = new Promise((success, fail) => {
    let testPass = false;
    if (testPass) {
      success("Success was achieved!");
    }
    else {
      fail("Failure :(");
    }
  });

  console.log("First console log");

  ourPromise
    .then(function (successMessage) {
      console.log("The promise succeeded and came back with the following message: ", successMessage);
    })
    .catch(function (failureMessage) {
      console.log("The promise failed and came back with the following message: ", failureMessage);
    });

  console.log("Fourth console log");

  let getStuff = async function () {
    return "stuff";
  }
  // function async getStuffUsingOldFunctionDefinition(): string{
  //   return "stuff";
  // }
  let getTheSameStuff = async function () {
    return "Similar stuff";
  }

  let getAllTheStuff = async () => {
    const theFirstStuff = getStuff();
    const theSecondStuff = getTheSameStuff();
    //returns both promises
    return await Promise.all([theFirstStuff, theSecondStuff]);
  }
  getAllTheStuff().then((value) => {
    console.log("First value from the getAllTheStuff method: ", value[0]);
    console.log("Second value from the getAllTheStuff method: ", value[1]);
  });

}

  updatePage(cardNameOnTheTypescriptSide: string): void {
    console.log("We did it, ", cardNameOnTheTypescriptSide);
    cardNameOnTheTypescriptSide = "somethingelse"
    console.log("after I tried changing it, ", cardNameOnTheTypescriptSide);

    this.title = "Changed it from the submit button";
  }

  addshowToList(newTvshowFromChild: show) {
    console.log("old array values ", this.show);

    this.show.push(newTvshowFromChild);

    // We need to clone the array for the pipe to work
    // This is an old way of cloning an object
    // this.bunchOfFood = Object.assign([], this.bunchOfFood);

    // This is a newer, faster way to clone an array
    this.show = [...this.show]; // using the spread operator

    console.log("Did the item get added? ", newTvshowFromChild);
    console.log("new array values ", this.show);
  }
}


}


