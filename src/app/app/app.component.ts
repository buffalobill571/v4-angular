import { Component, OnInit }  from '@angular/core';
import { Hero }               from '../objects/hero';
import { HEROES }             from '../objects/mock-heroes';
import { HeroService }        from '../services/hero.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ HeroService ],
})
export class AppComponent implements OnInit {
  title: string = 'Tour of heroes';

  ngOnInit() {
  }
}
