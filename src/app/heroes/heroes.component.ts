import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

//  hero: Hero = {
  //  id: 1,
    // name: 'Windstorm'
  // };
  heroes: Hero[]; // heroes est un array de Hero

  // plus besoin grâce aux routes
  // selectedHero: Hero; // il n'y a pas de hero séléctionné au démarrage
  // onSelect(hero: Hero): void { // identifier le héro séléctionné
  //  this.selectedHero = hero;
  // }


  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

}
