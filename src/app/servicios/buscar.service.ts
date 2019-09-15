import { Injectable } from '@angular/core';
import { PokemonRankModel } from '../modelos/pokemon-rank.model';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BuscarService {

  aBuscar: PokemonRankModel[] = [];

  onaBuscarChanged: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    this.onaBuscarChanged = new BehaviorSubject([]);
  }

  getPokemonRank(poke: string, ataque: number, defensa: number, salud: number) {
    return this.http.get('api/' + poke).subscribe(
      (res: PokemonRankModel[]) => {
        this.aBuscar = res;
        this._filtrar(ataque, defensa, salud);
        this.onaBuscarChanged.next(this.aBuscar);
      },
      (error) => {
      }
    );
  }

  private _filtrar(ataque: number, defensa: number, salud: number) {
    const aux: PokemonRankModel[] = [];

    this.aBuscar.forEach(element => {
      if ((element.AtkIV === ataque) && (element.DefIV === defensa) && (element.StamIV === salud)) {
        aux.push(element);
      }
    });

    this.aBuscar = aux;
  }

}
