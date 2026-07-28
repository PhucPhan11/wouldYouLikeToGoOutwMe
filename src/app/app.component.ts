import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RomanticBackgroundComponent } from './shared/romantic-background/romantic-background.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, RomanticBackgroundComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WouldYouLike';
}
