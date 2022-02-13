import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'M_Ingulu_MyFavoriteTvShow-angular';

  show= {
    title: 'Revenge',
    creator: 'Mike Kelley',
    genre: 'Drama'
  };
}
