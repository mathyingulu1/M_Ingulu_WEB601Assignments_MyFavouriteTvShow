import { Component, OnInit } from '@angular/core';
import { Tvshow } from '../helper-files/Tvshow';

@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent implements OnInit {
  save(): void {
    if (this.Tvshow) {
      this.tvshowservice.updateTvshow(this.Tvshow)
      .subscribe(() => this.goBack());
  }
}

add(name: string): void {
  name = name.trim();
  if (!name) { return; }
  this.tvshowservice.addTvshow({ name } as Tvshow)
    .subscribe(Tvshow => {
      this.Tvshow.push(Tvshow);
    });
}

  constructor() { }

  ngOnInit(): void {
  }

}
