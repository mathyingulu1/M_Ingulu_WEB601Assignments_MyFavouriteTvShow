import { Component, OnInit } from '@angular/core';
import { MessageService } from '../tvshowServices/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(public messageservice: MessageService) { }

  ngOnInit(): void {
  }

}
