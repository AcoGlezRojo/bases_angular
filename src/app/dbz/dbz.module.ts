import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponent } from './main-page/main-page.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { FormAgregarPersonajeComponent } from './form-agregar-personaje/form-agregar-personaje.component';

@NgModule({
  declarations: [
    MainPageComponent,
    PersonajesComponent,
    FormAgregarPersonajeComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
