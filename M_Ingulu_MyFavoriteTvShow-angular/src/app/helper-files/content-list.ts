import{ Content } from "./content-interface";

export class Contentlist {
    private _items: Content[];

    constructor() {
        this._items = [];
         }
    get items(): Content[] {
    return this._items;
    }
    addItem(item: Content) {
        this._items.push(item);
    }

    numberOfItems(): number{
        return this._items.length;
      }
    contentLength():number {
        return this._items.length;
    }
    getHtml(index: number): string{
        if (index >= this._items.length || index < 0)
        {
          return "<div>Something went terribly wrong</div>"
        }
        let itemAtIndex = this._items[index]
        return `<div class="title">${itemAtIndex.title}</div>
                <div class="description">${itemAtIndex.description}</div>
                <div class="creator">${itemAtIndex.creator}</div>
                <div class="image"><img src="${itemAtIndex.imgURL}" width="200"></div>
                <div class="type">${itemAtIndex.type}</div>`;
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