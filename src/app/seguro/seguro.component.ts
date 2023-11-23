import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-seguro',
  standalone: true,
  imports: [CommonModule, NavBarComponent],
  templateUrl: './seguro.component.html',
  styleUrl: './seguro.component.css'
})
export class SeguroComponent {

}
