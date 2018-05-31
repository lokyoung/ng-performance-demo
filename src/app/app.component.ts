import { Component } from '@angular/core';
import { HeroService } from './hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [HeroService],
})
export class AppComponent {
  keyword = '';
  heroes = [];

  count = 0;

  constructor(private heroService: HeroService) {}

  update() {
    console.log('Add Click');
    this.count++;

    // 在以下代码执行完毕之前DOM不会发生更新
    // for (let i = 0; i < 10000; i++) {
    //   console.log(i)
    // }

  // setTimeout(() => {
  //   this.count++;
  // }, 2000);
  }

  search() {
    console.log('Search Click');
    this.heroes = this.heroService.getHeroes(this.keyword);
  }
}
