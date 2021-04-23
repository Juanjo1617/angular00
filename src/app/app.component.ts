import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // nombre del componente
  templateUrl: './app.component.html', // el html que quiero mostrar
  styleUrls: ['./app.component.css'] //los estilos
})
export class AppComponent {
  nombre : string = "Juan";
  apellido: string = "Basantata"; 
  edad: number = 42;
  lenguajes: Array<any> = ['pyton', 'Typescript',]; 
}
