import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Tvshow } from './helper-files/Tvshow';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const Tvshow = [
      { id: 7, name: 'Mistresses'},
      { id: 8, name: 'The dropout'},
      { id: 9, name: 'Reign'},
      { id: 10, name: 'Step Up'},
      { id: 11, name: 'scandal'},
      { id: 12, name: 'Revenge'},
    ];
    return {Tvshow};
  }

  //constructor() { }
  genId(Tvshow: Tvshow[]): number {
    return Tvshow.length > 0? Math.max(...Tvshow.map(Tvshow => Tvshow.id)) + 1 : 11;
  }
}
