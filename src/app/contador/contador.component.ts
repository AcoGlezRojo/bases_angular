
import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `

    <div class="container mt-8 py-6 sm:px-6 lg:px-8 bg-white">
    
        <h2 class="my-2 tracking-tight font-extrabold text-gray-900 sm:text-xl md:text-2xl">{{ title }}</h2>

        <h3 class="my-2 text-gray-900 sm:text-lg md:text-xl">La base es base: <strong>{{ base }}</strong></h3>

        <div class="flex justify-start rounded-lg text-lg mb-4" role="group">
            <button class="bg-blue-500 text-white hover:bg-blue-400 rounded-l-lg px-4 py-2 mx-0 outline-none focus:shadow-outline" (click)="calcular(base)">+{{base}}</button>
            <span class="px-4 py-2 mx-0">{{ contador }}</span>
            <button class="bg-blue-500 text-white hover:bg-blue-400 rounded-r-lg px-4 py-2 mx-0 outline-none focus:shadow-outline" (click)="calcular(-base)">-{{base}}</button>
        </div>
    </div>

    `
})
export class ContadorComponent {
    title: string = 'Contador en Angular';
    contador: number = 0;
    base: number = 5;

    calcular(numero: number) {

        this.contador += numero;

    }
}