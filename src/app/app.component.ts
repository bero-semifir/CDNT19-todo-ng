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
    this.taches = this.tachesService.getTaches();
    console.table(this.taches)
  }

  tache: Tache = {titre: "Afficher une tache", fait: true}
}
