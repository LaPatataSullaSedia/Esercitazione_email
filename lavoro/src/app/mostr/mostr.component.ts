import { Component, Input } from '@angular/core';
import { Contenitore } from '../contenitore.model';

@Component({
  selector: 'app-mostr',
  standalone: true,
  imports: [],
  templateUrl: './mostr.component.html',
  styleUrl: './mostr.component.css'
})
export class MostrComponent {
  @Input() numeri : Contenitore = new Contenitore(0,0);
}
