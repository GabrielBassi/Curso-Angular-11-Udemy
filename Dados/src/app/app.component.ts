import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dadoIzquierdo = '../assets/img/dice1.jpg';
  dadoDerecho = '../assets/img/dice4.jpg';
  numero1 = 1;
  numero2 = 2;

  tirarDadosClick() :void {
    this.numero1 = Math.round(Math.random()*5) + 1;
    this.numero2 = Math.round(Math.random()*5) + 1;
    this.dadoIzquierdo = '../assets/img/dice' + this.numero1 + '.jpg';
    this.dadoDerecho = '../assets/img/dice' + this.numero2 + '.jpg';
  }
}
