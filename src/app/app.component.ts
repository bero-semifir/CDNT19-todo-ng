import { Component, OnInit } from '@angular/core';
import { Tache } from './tache/tache';
import { TachesService } from './tache/taches.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  taches: Tache[] = [];

  constructor(private tachesService: TachesService){}

  ngOnInit(): void {
    this.tachesService.getTaches()
      .subscribe((todos: any[]) => {
        this.taches = todos.map<Tache>((todo: any) => {
          return {
            titre: todo.title,
            fait: todo.done
          }
        })
      }) // .subscribe() donne l'action a réaliser avec le résultat;
  }

  tache: Tache = {titre: "Afficher une tache", fait: true}
}
