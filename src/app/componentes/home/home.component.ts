import { Component, OnInit } from '@angular/core';
import { BuscarService } from '../../servicios/buscar.service';
import { PokemonRankModel } from '../../modelos/pokemon-rank.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ivs = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  ataque = 0;
  defensa = 0;
  salud = 0;

  data: PokemonRankModel;

  tabla: tablaModel[] = [];

  constructor( private _buscar: BuscarService) { }

  ngOnInit() {
    this._buscar.onaBuscarChanged.subscribe(data => {
      console.log('cambio');
      console.log(data[0]);
      this.data = data[0];
    });

  }

  definir(stat: string, iv: number): void {
    console.log( stat );
    console.log( iv );
    switch (stat) {
      case 'sword':
          this.ataque = iv;
          break;
      case 'shield':
          this.defensa = iv;
          break;
      case 'heart':
          this.salud = iv;
          break;
      default: /** no hago nada */   break;
    }
  }

  buscar() {
    let aux: tablaModel = new tablaModel();

    aux.ivs = this.ataque + '-' + this.defensa + '-' + this.salud;

    this._buscar.getPokemonRank('turtwig', this.ataque, this.defensa, this.salud);

    aux.p1 = this.data.Rank;

    this._buscar.getPokemonRank('grotle', this.ataque, this.defensa, this.salud);

    aux.p2 = this.data.Rank;

    this._buscar.getPokemonRank('torterra', this.ataque, this.defensa, this.salud);

    aux.p3 = this.data.Rank;

    this.tabla.push(aux);

    console.log(this.tabla);
  }

}


// tslint:disable-next-line: class-name
export class tablaModel {
  ivs: string;
  p1: number;
  p2: number;
  p3: number;

  constructor() {}

}
