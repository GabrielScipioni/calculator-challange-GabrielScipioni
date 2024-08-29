import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';
  numero1: number | null = null;
  numero2: number | null = null;
  resultado: number | null = null;

  sumar(): void {
    if (this.numero1 !== null && this.numero2 !== null) {
      this.resultado = this.numero1 + this.numero2;
    }
  }

  restar(): void {
    if (this.numero1 !== null && this.numero2 !== null) {
      this.resultado = this.numero1 - this.numero2;
    }
  }

  multiplicar(): void {
    if (this.numero1 !== null && this.numero2 !== null) {
      this.resultado = this.numero1 * this.numero2;
    }
  }

  dividir(): void {
    if (this.numero1 !== null && this.numero2 !== null) {
      if (this.numero2 !== 0) {
        this.resultado = this.numero1 / this.numero2;
      } else {
        alert('No se puede dividir por cero');
      }
    }
  }
}
