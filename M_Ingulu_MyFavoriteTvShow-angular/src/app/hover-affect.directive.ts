import { Directive, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { type } from 'os';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective implements OnInit {
  @Input() type?: string

  constructor(private elm: ElementRef) { 
    elm.nativeElement.style.cursor = "pointer";
  }

ngOnInit(): void {

}
@HostListener("click") onClick(btn: any) {
  this.hoveraffectFunction(this.type);
}

private hoveraffectFunction(typeValue?: string): void {
  this.elm.nativeElement.style.tvshowtype = typeValue ?? "Drama";
}

}
