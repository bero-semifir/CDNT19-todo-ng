import { Component, OnInit, Input } from '@angular/core';
import { Tache } from './tache';

@Component({
  selector: 'app-tache',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.scss']
})
export class TacheComponent implements OnInit {

  @Input() tache!: Tache;

  constructor() { }

  ngOnInit(): void {
  }

  faireTache(){
    this.tache.fait = true;
  }

}
