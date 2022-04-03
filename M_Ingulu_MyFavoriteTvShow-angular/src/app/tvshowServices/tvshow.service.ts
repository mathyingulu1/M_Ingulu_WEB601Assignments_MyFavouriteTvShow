import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Content } from '../helper-files/content-interface';
import { MessageService } from './message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type':
    'application/json' })
  };
  
  constructor(private messageService: MessageService, private http: HttpClient) { }

  addContent(newtvshow: Content): Observable<Content>{
    this.messageService.add("Going to add tvshow to the server!");
    return this.http.post<Content>("api/movie", newtvshow, this.httpOptions);
  }

  updateContent(oldtvshow: Content): Observable<any>{
    return this.http.put("api/movie", oldtvshow, this.httpOptions);
    }

  gettvshowList(): Observable<Content[]> {
    this.messageService.add("Content array loaded!");
    return this.http.get<Content[]>("api/tvshow");
  }

  getSingletvshow(id: number): Observable<Content> {

    return this.http.get<Content>("api/tvshow/" + id);

/*       // if the id is out of range, below 0 or above the length, the filter will return an empty array
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
      } */
