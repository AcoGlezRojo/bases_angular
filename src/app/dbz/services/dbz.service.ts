import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';


@Injectable({
  providedIn: 'root'
})
export class DbzService {

  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000
    },
    {
      nombre: 'Vegeta',
      poder: 8500
    }
  ]

  constructor(){
    console.log('iniciando dbz service');
  }

  get personajes(): Personaje[]{
    return [...this._personajes]; //buena práctica de JS
  }

  agregarPersonaje(personaje: Personaje){
    this._personajes.push(personaje)
  }

}
