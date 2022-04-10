import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.scss']
})

export class ContentDetailComponent implements OnInit {
  id: number;
  content: Content;
  constructor(private route: ActivatedRoute,
  private contentService: ContentService) {}


his.route.paramMap.subscribe((params) => {
  this.id = Number(params.get("id") ?? 0);
  this.contentService.getContentItem(this.id)
  .subscribe((c) => {
  this.content = c;
  });
  });

  getContentItem(id: number): Observable<Content>{
    console.log("Retrieving OBSERVABLE content item");
    return this.http.get<Content>("api/content/" + id);
    }

    ngOnInit(){
      this.route.paramMap.subscribe(params => {
      this.id = +(params.get('id') ?? 0); // uses the +
      unary operator
      });
      }
  
  }