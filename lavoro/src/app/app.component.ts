import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Contenitore } from './contenitore.model';
import { MostrComponent } from './mostr/mostr.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MostrComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lavoro';
  numeri : Contenitore = new Contenitore(0,0);
  vett_favoriti : Contenitore[] = [];

  piu(numero : HTMLInputElement) : boolean
  {
    this.numeri.nClick+=1
    this.numeri.tot = this.numeri.tot + Number(numero.value)

    return false;
  }

  meno(numero : HTMLInputElement) : boolean
  {
    this.numeri.nClick+=1
    this.numeri.tot = this.numeri.tot - Number(numero.value)

    return false;
  }
  favorito()
  {
    this.vett_favoriti.push(new Contenitore(this.numeri.tot, this.numeri.nClick))
  }
}
