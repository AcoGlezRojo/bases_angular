import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: []
})
export class PersonajesComponent {

  @Input() personajes: Personaje[] = []

}
