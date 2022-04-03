import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
//import { MessageService } from '../tvshowServices/message.service';
//import { tvshowServices } from '../tvshowServices';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.css']
})
export class ModifyContentComponentComponent implements OnInit {
  @Output() newContentEvent = new EventEmitter<Content>();
  @Output() updateContentEvent: EventEmitter<Content> = new EventEmitter<Content>();

  newTvshow?: Content;

  constructor() { }

  ngOnInit(): void {
  }

  addTvshow(name: string, imageUrl: string, body: string, tags: string): void {
    this.newTvshow = {
      // id: parseInt(id),
      name: name,
      imageUrl: imageUrl,
      body: body,
      tags: tags.split(",")
    };
    this.newContentEvent.emit(this.newTvshow);
  }
  updateTvshow(id: string, name: string, imageUrl: string, body: string, tags: string): void {
    this.newTvshow = {
      id: parseInt(id),
      name: name,
      imageUrl: imageUrl,
      body: body,
      tags: tags.split(",")
    };
    this.updateContentEvent.emit(this.newTvshow);
  }

}
  
/*   tvshowListForCheckingValidId: Content[] =[];
  newContent: Content = {
    title: "", description: '', creator: '', type: undefined
  };
  tempId: string = "";
  tempTags: string = '';
  errorMessage: string = '';

  constructor(private tvshowServices: tvshowServices, private messageService: MessageService) { }

  ngOnInit(): void {
    this.tvshowServices.gettvshowList().subscribe(tvshowList => {
      this.tvshowListForCheckingValidId = tvshowList;
    });
  }

  addContentFromChild(): void {
    if (this.tempId === "") {
      this.newContent.tags = this.tempTags.split(';');
      this.tvshowServices.addContent(this.newContent).subscribe((newContentFromServer) => {
        this.messageService.add("Movie successfully added to the server!");
        this.newContentEvent.emit(newContentFromServer);
      });

      // this.newContentEvent.emit(this.newContent);
      this.newContent = {
        title: "", description: '', creator: '', type: undefined
      };
      this.tempId = "";
      this.tempTags = ""
      // this.errorMessage = "";
    }
    else {
      this.newContent.id = parseInt(this.tempId);
      if (this.newContent.id !== undefined
        && this.tvshowListForCheckingValidId.some(tvshow => tvshow.id === this.newContent.id)) {
          this.newContent.tags = this.tempTags.split(';');
          this.tvshowServices.updateContent(this.newContent).subscribe(() => {
            this.messageService.add("tvshow successfully updated on the server!");
            this.newContentEvent.emit(this.newContent);
          });
    
         
          this.newContent = {
            title: "", description: '', creator: '', type: undefined
          };
          this.tempId = "";
          this.tempTags = ""
         
    

      }
      
    }

  } */
}
