import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export interface Crisis {
  id: number;
  name: string;
}
export class CrisisDetailResolverService implements Resolve {
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable {
    // your logic goes here
  }
}
/* export class ResolverService {

  constructor() { }
} */
