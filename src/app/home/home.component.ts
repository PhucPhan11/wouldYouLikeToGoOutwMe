import {Component} from '@angular/core';
import {YesNoButtonComponent} from './yes-no-button/yes-no-button.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    YesNoButtonComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
