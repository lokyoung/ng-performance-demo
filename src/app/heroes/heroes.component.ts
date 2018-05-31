import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Hero } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroesComponent {
  @Input() heroes: Array<Hero> = [];

  constructor() { }

  getGender(genderCode) {
    console.log(genderCode);
    if (genderCode === 'M') { return 'Male'; }
    if (genderCode === 'F') { return 'Female'; }
    return '';
  }

}
