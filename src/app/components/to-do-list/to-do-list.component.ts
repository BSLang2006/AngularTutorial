import { Component, OnInit } from '@angular/core';

import { Hero } from 'src/hero';
import { HeroService } from 'src/app/hero.service';
import { ToDo } from 'src/toDo';


@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  toDo: ToDo[] = [];

  constructor(private toDoService: HeroService) { }

  ngOnInit(): void {
    this.getToDo();
  }

  getToDo(): void {
    this.toDoService.getToDo()
    .subscribe(toDo => this.toDo = toDo);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.toDoService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.toDo.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.toDo = this.toDo.filter(h => h !== hero);
    this.toDoService.deleteHero(hero.id).subscribe();
  }

}