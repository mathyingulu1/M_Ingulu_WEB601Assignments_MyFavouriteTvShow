import { Injectable } from '@angular/core';
import { Tvshow } from '../helper-files/Tvshow';
import { LISTOFTVSHOW } from '../helper-files/ContentDb';
import { messageservice } from './tvshowServices';
import { of, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
//import { Content } from '@angular/compiler/src/render3/r3_ast';


@Injectable({
  providedIn: 'root'
})
export class tvshowService {

  private tvshowUrl = 'api/tvshow'; 
  
  constructor(
    private http: HttpClient,
    private messageservice: messageservice) { }

private log(message: string) {
  this.messageservice.add(`tvshowservice: ${message}`);
}

httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
//getTvshow(): Observable<Tvshow[]> {
  //const Tvshow = of(LISTOFTVSHOW);
  //return Tvshow;
//}

getTvshow(id: number): Observable<Tvshow> {
  const url = `${this.tvshowUrl}/${id}`;
  return this.http.get<Tvshow>(url) .pipe(
    tap(_ => this.log(`fetched Tvshow id=${id}`)),
    catchError(this.handleError<Tvshow>(`getTvshow id=${id}`))
  );
}

updateTvshow(Tvshow: Tvshow): Observable<any> {
  return this.http.put(this.tvshowUrl, Tvshow, this.httpOptions).pipe(
    tap(_ => this.log(`updated hero id=${Tvshow.id}`)),
    catchError(this.handleError<any>('updateHero'))
  );
}

addHero(hero: Tvshow): Observable<Tvshow> {
  return this.http.post<Tvshow>(this.tvshowUrl, hero, this.httpOptions).pipe(
    tap((newTvshow: Tvshow) => this.log(`added Tvshow w/ id=${newTvshow.id}`)),
    catchError(this.handleError<Tvshow>('addTvshow'))
  );
}
private handleError<T>(operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    console.error(error); 

    this.log(`${operation} failed: ${error.message}`);
    return of(result as T);
  };
}

    getLISTOFTVSHOW(): Observable<Tvshow[]> {
      this.messageservice.add("Content array loaded!");
      return of(LISTOFTVSHOW);
    }

    getSingleTvshow(id: number): Observable<Tvshow> {
      let filteredlistoftvshow: Tvshow[] = LISTOFTVSHOW.filter(tvshowItem => tvshowItem.id === id);
      // if the id is out of range, below 0 or above the length, the filter will return an empty array
      if (filteredlistoftvshow.length)
      {
        this.messageservice.add(`Content Item at id: ${id}`);
        return of(filteredlistoftvshow[0]);
      }
      else {
        this.messageservice.add("Invalid id number entered");
        return of({
          id: -1,
          genre: "Invalid id entered",
          title: "n/a",
          director: "nobody"
        });
        }
      }
  
    }
