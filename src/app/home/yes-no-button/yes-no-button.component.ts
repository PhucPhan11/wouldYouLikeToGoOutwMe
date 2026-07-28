import { Component } from '@angular/core';

@Component({
    selector: 'app-yes-no-button',
    imports: [],
    templateUrl: './yes-no-button.component.html',
    styleUrl: './yes-no-button.component.css'
})
export class YesNoButtonComponent {
  readonly noLabels = [
    'No',
    'Are you sure?',
    'Honey please',
    "Don't do this to me :(",
    "I'm gonna cry ...",
    'Yes, pleaseeeee'
  ];

  noLabelIndex = 0;

  get noLabel(): string {
    return this.noLabels[this.noLabelIndex];
  }

  get yesScale(): number {
    return 1 + this.noLabelIndex * 0.15;
  }

  get noScale(): number {
    return 1 - this.noLabelIndex * 0.15;
  }

  onYesClick() {
    console.log('Yes clicked!');
  }

  onNoClick() {
    if (this.noLabelIndex < this.noLabels.length - 1) {
      this.noLabelIndex++;
    }
  }
}
