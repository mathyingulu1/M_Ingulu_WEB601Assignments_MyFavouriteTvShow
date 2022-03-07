import { Component, OnInit, Output } from '@angular/core';
//import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
//import { triggerAsyncId } from 'async_hooks';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  @Output() newTvshowEvent: EventEmitter<myList> = new EventEmitter<myList>();
  newmyList?: myList;

  constructor() { }

  ngOnInit(): void {
  }

  addTvshow(id: string, name: string, imageURL: string, body: string, tags: string):
   this.myList = {
     id: parseInt(id),
     name: name,
     imageURL: imageURL,
     body: body,
     tags: tags.split(",")
   };

   this.myList.emit(this.myList);
  }

}


