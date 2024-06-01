import { Component } from '@angular/core';
import { CarousalComponent } from '../../unit/carousal/carousal.component';
import { CardsComponent } from '../../unit/cards/cards.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarousalComponent,CardsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
