import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-form-agregar-personaje',
  templateUrl: './form-agregar-personaje.component.html',
  styleUrls: []
})
export class FormAgregarPersonajeComponent {

  @Input() nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(private dbzservice: DbzService){}

  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  agregarPersonaje(): void {
    if (this.nuevo.nombre.trim().length === 0) { return; }

    console.log(this.nuevo);

    //this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzservice.agregarPersonaje(this.nuevo);
    
    this.nuevo = {
      nombre: '',
      poder: 0
    }
  }

}
