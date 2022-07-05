import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-form-agregar-personaje',
  templateUrl: './form-agregar-personaje.component.html',
  styleUrls: []
})
export class FormAgregarPersonajeComponent {

  @Input() personajes: Personaje[] = [];

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  agregarPersonaje(): void {
    if (this.nuevo.nombre.trim().length === 0) { return; }

    console.log(this.nuevo);
    this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
