import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { type } from 'os';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective  {
  @Input() type?: string
  @Input() firstOrLast?: boolean;

  originalElementBorder: string;

  constructor(private elm: ElementRef) { 
    this.originalElementBorder = this.elm.nativeElement.style.border;
    //elm.nativeElement.style.cursor = "pointer";
  }

//@HostListener("click") onClick(btn: any) {
  //this.hoveraffectFunction(this.type);
//}

//private hoveraffectFunction(typeValue?: string): void {
  //this.elm.nativeElement.style.tvshowtype = typeValue ?? "Drama";
//}

@HostListener("mouseenter") onMouseEnter() {
  if (this.type == "type") { // operating on type
    this.elm.nativeElement.style.textDecoration = "underline";
  }
  else if (this.type == "tag") { // operating on tags
    this.elm.nativeElement.style.fontWeight = "bold";
  }
  else if (this.type == "card" && this.firstOrLast) { //operating on card
    this.elm.nativeElement.style.border = "3px dashed #123456";
  }
}

@HostListener("mouseleave") onMouseLeave() {
  if (this.type == "type") { // operating on type
    this.elm.nativeElement.style.textDecoration = "initial";
  }
  else if (this.type == "tag") { // operating on tags
    this.elm.nativeElement.style.fontWeight = "normal";
  }
  else if (this.type == "card" && this.firstOrLast) { //operating on card
    this.elm.nativeElement.style.border = this.originalElementBorder;
  }

}
}
