import { NONE_TYPE } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HEROES } from '../mock-heroes'
import { HeroService } from "../hero.service"
import { MessageService } from "../message.service"
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // hero: Hero = { id: 1, name: 'WindStorm' }
  selectedHero!: Hero;
  heroes !: Hero[]
  constructor(private heroService: HeroService, private messageService: MessageService) {
    // this.selectedHero = { id: 0, name: "" }
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }
  ngOnInit(): void {
    this.getHeroes()
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroesComponent: Selected hero id =${hero.id}`)
  }
}