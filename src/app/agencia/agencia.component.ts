import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-agencia',
  standalone: true,
  imports: [CommonModule, NavBarComponent],
  templateUrl: './agencia.component.html',
  styleUrl: './agencia.component.css'
})
export class AgenciaComponent {

}
