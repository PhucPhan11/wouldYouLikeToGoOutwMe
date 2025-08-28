import { Component } from '@angular/core';

@Component({
    selector: 'app-yes-no-button',
    imports: [],
    templateUrl: './yes-no-button.component.html',
    styleUrl: './yes-no-button.component.css'
})
export class YesNoButtonComponent {
  onYesClick() {
    console.log('Yes clicked!');
  }

  onNoClick() {
    console.log('No clicked!');
  }
}
