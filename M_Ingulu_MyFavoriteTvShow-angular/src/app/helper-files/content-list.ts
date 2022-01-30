import{ Content } from "./content-interface";

export class Contentlist {
    private _items: Content[];

    constructor() {
        this._items = {
        //this._items[0] = item;
        //items = {
          id: 1,
          title: "24",
          description: "American drama series",
          cretor: "Joel Surnow",
          type: "Action",
          imageUrl: "https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202201181338", 
        };
    }
    

get items(): Content[] {
    return this._items;
}
}

import { Component } from '@angular/core';

@Component({
    selector: 'Content-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
  })

  export class AppComponent {
    title: string;

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
}