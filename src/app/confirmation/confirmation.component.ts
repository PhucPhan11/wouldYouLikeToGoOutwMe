import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { saveDateSelection } from '../shared/date-selection-webhook';

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
  private readonly saveRequest = saveDateSelection({
    date: this.selectedDate,
    time: this.selectedTime,
    activity: this.selectedActivity
  });

  get summary(): string {
    return `${this.selectedDate} at ${this.selectedTime} • ${this.selectedActivity}`;
  }
}
