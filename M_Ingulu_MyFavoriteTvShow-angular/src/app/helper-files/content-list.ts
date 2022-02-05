import{ Content } from "./content-interface";

export class Contentlist {
    private _items: Content[];

    constructor(item:Content) {
        this._items = [];
         }
    get items(): Content[] {
    return this._items;
    }
    addItem(item: Content) {
        this._items.push(item);
    }
    contentLength():number {
        return this._items.length;
    }
}

/*import { Component } from '@angular/core';

@Component({
    selector: 'Content-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
  })

  export class AppComponent {
    title: 'M_Ingulu_MyFavoriteTvshow';

    constructor() {
        this.title = '<em>ContentList</em>';
        let name: any;
        name = {
          value: 'Mathy',
          position: 'Student'
        };
        name=5;

        let movie: any;
        movie = {
            title: 'The Avengers',
            director: 'Joss Whedon'
        };

        let cartoon: any;
        cartoon= {
            title: 'The Simpsons',
            cast: 'Hank Azaria'
        };
    }
}*/