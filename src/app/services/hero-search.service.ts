import { Injectable }   from '@angular/core';
import { Http }         from '@angular/http';

import { Observable }   from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Hero }         from '../objects/hero';


@Injectable()
export class HeroSearchService {

    private heroesUrl = 'http://127.0.0.1:8000/heroes';

    constructor(private http: Http) {}

    search(term: string): Observable<Hero[]> {
        return this.http
                   .get(`${this.heroesUrl}/search/?term=${term}`)
                   .map(response => response.json() as Hero[]);
    }
}
