import { Component, OnInit } from '@angular/core';
import { Tache } from '../tache';
import { TachesService } from '../taches.service';

@Component({
  selector: 'app-tache-form',
  templateUrl: './tache-form.component.html',
  styleUrls: ['./tache-form.component.scss']
})
export class TacheFormComponent implements OnInit {

  newTache: Tache = { titre: "", fait: false };

  constructor(private tachesService: TachesService) { }

  ngOnInit(): void {
  }

  /**
   * Gére la soumission du formulaire
   */
  soumettreFormulaire(){
    console.log(this.newTache)
    this.tachesService.addTache(this.newTache);
    this.newTache = { titre: "", fait: false };
  }

}
