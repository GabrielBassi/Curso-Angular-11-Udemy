import { Component } from '@angular/core';

/*decorador*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  listadoEsudiantes: any[] = [
    {nombre: 'Gabriel Bassi', estado: 'Promocionado'},
    {nombre: 'Jonathan Lopez', estado: 'Regular'},
    {nombre: 'Marta Sanchez Dominguez', estado: 'Libre'},
    {nombre: 'juan Dominguez', estado: 'Promocionado'},
    {nombre: 'Lucia Junin', estado: 'Libre'},
  ]  

  mostrar = true;
  toogle(): void {
    this.mostrar = !this.mostrar
  }
}
