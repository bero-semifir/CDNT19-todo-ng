import { Injectable } from '@angular/core';
import { Tache } from './tache';
import { HttpClient } from '@angular/common/http'
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TachesService {

  constructor(private httpClient: HttpClient) { }

  getTaches(): Observable<any[]>{
    // envoie d'une requete HTTP en GET vers https://jsonplaceholder.typicode.com/todos
    return this.httpClient.get<any[]>("https://jsonplaceholder.typicode.com/todos")
  }

  addTache(tache: Tache){
    return this.httpClient.post("https://jsonplaceholder.typicode.com/todos", tache)
  }

}
