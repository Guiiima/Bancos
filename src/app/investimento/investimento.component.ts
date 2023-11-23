import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-investimento',
  standalone: true,
  imports: [CommonModule, NavBarComponent],
  templateUrl: './investimento.component.html',
  styleUrl: './investimento.component.css'
})
export class InvestimentoComponent {

}
