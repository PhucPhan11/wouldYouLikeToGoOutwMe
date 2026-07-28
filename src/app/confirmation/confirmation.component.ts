import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  imports: [],
  templateUrl: './confirmation.component.html',
  styleUrl: './confirmation.component.css'
})
export class ConfirmationComponent {
  private readonly route = inject(ActivatedRoute);
  readonly selectedDate = this.route.snapshot.queryParamMap.get('date') ?? '';
  readonly selectedTime = this.route.snapshot.queryParamMap.get('time') ?? '';
  readonly selectedActivity = this.route.snapshot.queryParamMap.get('activity') ?? '';

  get summary(): string {
    return `${this.selectedDate} at ${this.selectedTime} • ${this.selectedActivity}`;
  }
}
