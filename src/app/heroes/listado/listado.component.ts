import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  heroes: string[] = ['Ironman', 'Thor', 'Hulk', 'Capitán América', 'Spiderman'];
  numHeroes: number = 0;

  constructor() {
    this.numHeroes = this.heroes.length
  }

  ngOnInit(): void {

  }

  borrarHeroe(index: number) {
    this.heroes.splice(index, 1);
    this.numHeroes--;
  }

}
