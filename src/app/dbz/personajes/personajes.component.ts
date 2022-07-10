import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: []
})
export class PersonajesComponent {

  //@Input() personajes: Personaje[] = []

  constructor(private dbzservice: DbzService){}

  get personajes(){
    return this.dbzservice.personajes;
  }

}
