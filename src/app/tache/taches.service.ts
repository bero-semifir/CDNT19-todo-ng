import { Injectable } from '@angular/core';
import { Tache } from './tache';

@Injectable({
  providedIn: 'root'
})
export class TachesService {

  private taches: Tache[] = [
    {
      titre: "Faire un composant tache",
      fait: true,
    },
    {
      titre: "Afficher le composant",
      fait: true,
    },
    {
      titre: "Coder le service",
      fait: true,
    },
    {
      titre: "Appeler le service",
      fait: true,
    },
  ]

  constructor() { }

  getTaches(){
    return this.taches;
  }

  addTache(tache: Tache){
    this.taches.push(tache);
  }

}
