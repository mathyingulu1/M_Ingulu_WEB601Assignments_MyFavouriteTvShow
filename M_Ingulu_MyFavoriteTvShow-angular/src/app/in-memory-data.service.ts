import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";
import { Content } from "../helper-files/content-interface";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  tvshowList: Content[] = [{
    id: 0,
    title: 'Prison Break',
    description: 'Tv show',
    creator: 'Paul Scheuring',
    imgURL:
      'https://en.wikipedia.org/wiki/Prison_Break#/media/File:Prison-break-s1-intro.jpg',
    tags: ["Scoffield, prison"]
  },
  {
    id: 1,
    title: 'One Tree Hill',
    description: 'Teenager show',
    creator: 'Mark Schwahn',
    imgURL:
      'https://en.wikipedia.org/wiki/One_Tree_Hill_(season_4)#/media/File:One_Tree_Hill_-_Season_4_-_DVD.JPG',
    //type: 'drama',
  },
  {
    id: 2,
    title: '24 hours',
    description: 'Tv show',
    creator: 'Joel Surnow',
    imgURL:
      'https://en.wikipedia.org/wiki/24_(TV_series)#/media/File:24-Logo.svg',
    type: 'american drama',
    tags: ["Jack, counterterrorism"]
  },
  {
    id: 3,
    title: 'who killed sara',
    description: 'Tv show',
    creator: 'Jose Ignacio',
    imgURL:
      'https://en.wikipedia.org/wiki/24_(TV_series)#/media/File:24-Logo.svg',
    type: 'Thriller',
  },
  {
    id: 4,
    title: 'Private Practice',
    description: 'Tv show',
    creator: 'Shonda Rhimes',
    imgURL:
      'https://en.wikipedia.org/wiki/24_(TV_series)#/media/File:24-Logo.svg',
    type: 'american drama',
  },
  {
    id: 5,
    title: 'Vikings',
    description: 'Tv show',
    creator: 'Michael Hirst',
    imgURL:
      'https://en.wikipedia.org/wiki/24_(TV_series)#/media/File:24-Logo.svg',
    type: 'action',
  },
];

  constructor() { }

  createDb() {
    const tvshow = this.tvshowList
    return {tvshow};
  }
  genId(tvshowList: Content[]): number {
    return tvshowList.length > 0 ? Math.max(...tvshowList.map(c =>
    c.id ?? 0)) + 1 : 0;
  }
}
