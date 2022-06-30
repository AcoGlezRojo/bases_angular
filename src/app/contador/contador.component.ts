
import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    
        <h2>{{ title }}</h2>

        <h3>La base es base: <strong>{{ base }}</strong></h3>

        <button (click)="calcular(base)">+{{base}}</button>

        <span>{{ contador }}</span>

        <button (click)="calcular(-base)">-{{base}}</button>
    
    `
})
export class ContadorComponent {
    title: string = 'Contador en Angular';
    contador: number = 0;
    base: number = 5;

    sumar() {
        this.contador += 1;
    }

    restar() {
        if (this.contador > 0) {
            this.contador -= 1;
        }
    }

    calcular(numero: number) {
        this.contador += numero;
    }
}