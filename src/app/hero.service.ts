import { Injectable } from '@angular/core';

const fibonacci = (num: number): number => {
  if (num === 1 || num === 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
};

@Injectable()
export class HeroService {
  private heroList: Array<Hero> = [
    new Hero('Barry', 'M'),
    new Hero('Tess', 'F'),
    new Hero('Tyler', 'M'),
    new Hero('William', 'M'),
    new Hero('Trump', 'M'),
    new Hero('Helen', 'F'),
  ];

  public getHeroes(keyword: string) {
    return this.heroList.filter(hero => {
      return hero.name.toLowerCase().includes(keyword.toLowerCase());
    });
  }
}

export class Hero {
  constructor(public name: string, public genderCode: string) {
  }
}
