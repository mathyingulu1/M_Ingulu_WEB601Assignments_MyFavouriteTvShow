import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { Tvshow } from '../helper-files/Tvshow';
import { LISTOFTVSHOW } from '../helper-files/ContentDb';
import { messageService } from './tvshow.service.spec';

@Injectable({
  providedIn: 'root'
})
export class tvshowService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
  
  constructor(private messageService: messageService) {

    }

    getContent(): Tvshow[] {
      return LISTOFTVSHOW;
    }

    getContentObs(): Observable<Tvshow[]> {
      const tvshow = of(LISTOFTVSHOW);
      this.messageService.add('tvshowService: fetched heroes')
      return of(LISTOFTVSHOW);
  }
}
