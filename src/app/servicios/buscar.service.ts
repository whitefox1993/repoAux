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
        console.log('el get');
        this.aBuscar = res;
        this._filtrar(ataque, defensa, salud);
        this.onaBuscarChanged.next(this.aBuscar);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  private _filtrar(ataque: number, defensa: number, salud: number) {
    console.log('entro al filtrar');
    const aux: PokemonRankModel[] = [];

    this.aBuscar.forEach(element => {
      if ((element.AtkIV === ataque) && (element.DefIV === defensa) && (element.StamIV === salud)) {
        aux.push(element);
      }
    });

    console.log(aux);
    this.aBuscar = aux;
  }

  // private _eliminarRepetidos(): void {
  //   // this.rank = this.rank.from(new Set(this.rank));

  //   let unique: PokemonRankModel[] = [];
  //   let pushear = true;

  //   this.rank.forEach(element => {
  //     if (unique.length === 0) {
  //       unique.push(element);
  //     } else {
  //       unique.forEach(element2 => {
  //         if ((element.AtkIV === element2.AtkIV) &&
  //           (element.DefIV === element2.DefIV) &&
  //           (element.StamIV === element2.StamIV)
  //         ) {
  //           pushear = false;
  //         }
  //       });

  //       if (pushear) {
  //         unique.push(element);
  //       }
  //       pushear = true;
  //     }
  //   });
  //   this.rank = unique;
  // }










  
}
