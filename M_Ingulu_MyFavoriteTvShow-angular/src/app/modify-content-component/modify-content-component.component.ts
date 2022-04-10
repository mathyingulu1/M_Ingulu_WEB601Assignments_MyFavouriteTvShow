import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Content } from '../helper-files/content-interface';
import { MessageService } from '../tvshowServices/message.service';
import { tvshowservice } from '../tvshowServices';

export interface DialogData {
  newContent: Content;
  tempTags: string;
}

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.css']
})
export class ModifyContentComponentComponent implements OnInit {
  @Output() newContentEvent = new EventEmitter<Content>();
  tvshowListForCheckingValidId: Content[] = [];
  @Input() newContent: Content = {
    title: "", description: '', creator: '', type: undefined
  };
  tempId: string = "";
  tempTags: string = '';
  errorMessage: string = '';
  //tvshowServices: any;

  //newTvshow?: Content;

  constructor() { }

  ngOnInit(): void {
  }

  openDialog(): void {

    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '300px',
      data: this.newContent,
    });

    dialogRef.afterClosed().subscribe((result: DialogData) => {
      console.log('The dialog was closed', result);
      // this.animal = result;

      this.newContent = result.newContent;
      this.tempTags = result.tempTags;
      this.addContentFromChild();
    });
  }

  addContentFromChild(): void {
    if (this.tempId === "") {
      this.newContent.tags = this.tempTags.split(';');
      this.tvshowServices.addContent(this.newContent).subscribe((newContentFromServer) => {
        this.messageServices.add("Tvshow successfully added to the server!");
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
      if (this.newContent.id !== undefined) {
        // only get content list from the server if we need to validate against it
        this.tvshowService.gettvshowList().subscribe(tvshowList => {
          this.tvshowListForCheckingValidId = tvshowList;


          if (this.tvshowListForCheckingValidId.some(tvshow => tvshow.id === this.newContent.id)) {
            this.newContent.tags = this.tempTags.split(';');
            this.tvshowService.updateContent(this.newContent).subscribe(() => {
              this.messageService.add("Tvshow successfully updated on the server!");
              this.newContentEvent.emit(this.newContent);
            });

            // this.newContentEvent.emit(this.newContent);
            this.newContent = {
              title: "", description: '', creator: '', type: undefined
            };
            this.tempId = "";
            this.tempTags = ""
            // this.errorMessage = "";
          }

        });
      }

    }

  }
}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  tempId: string = "";
  tempTags: string = '';
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Content,
  ) {
    this.tempId = data.id + "";
    if (data.tags) {
      this.tempTags = data.tags.join(";");
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  sendDataUp(): void {
    this.data.tags = this.tempTags.split(';');
    this.dialogRef.close(this.data); // if the content the afterCLosed was expecting was just a content Item
  }
}
/*   addTvshow(name: string, imageUrl: string, body: string, tags: string): void {
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

} */
  
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
