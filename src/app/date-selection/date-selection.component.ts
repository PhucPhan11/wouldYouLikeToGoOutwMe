import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

interface DateOption {
  readonly date: Date;
  readonly label: string;
  readonly summaryLabel: string;
  readonly weekday: string;
}

interface TimeOption {
  readonly label: string;
  readonly helper: string;
}

@Component({
  selector: 'app-date-selection',
  imports: [],
  templateUrl: './date-selection.component.html',
  styleUrl: './date-selection.component.css'
})
export class DateSelectionComponent {
  private readonly router = inject(Router);

  readonly dateOptions = this.createDateOptions();
  readonly timeOptions: TimeOption[] = [
    { label: '5:00 PM', helper: "let's go" },
    { label: '6:00 PM', helper: 'sunset vibes' },
    { label: '7:00 PM', helper: 'a little later' }
  ];
  readonly activityOptions = [
    'Food',
    'Drinks',
    'Walk in the park',
    "I'll pick something super unique"
  ];

  selectedDate = this.dateOptions[0];
  selectedTime = this.timeOptions[0];
  selectedActivity = this.activityOptions[0];

  get confirmLabel(): string {
    return `Lock in ${this.selectedDate.label} at ${this.selectedTime.label} — ${this.selectedActivity}`;
  }

  selectDate(date: DateOption) {
    this.selectedDate = date;
  }

  selectTime(time: TimeOption) {
    this.selectedTime = time;
  }

  selectActivity(activity: string) {
    this.selectedActivity = activity;
  }

  onConfirm() {
    this.router.navigate(['/confirmation'], {
      queryParams: {
        date: this.selectedDate.summaryLabel,
        time: this.selectedTime.label,
        activity: this.selectedActivity
      }
    });
  }

  private createDateOptions(): DateOption[] {
    const formatter = new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric'
    });
    const weekdayFormatter = new Intl.DateTimeFormat('en-US', { weekday: 'short' });
    const summaryFormatter = new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric'
    });
    const today = new Date();
    today.setHours(12, 0, 0, 0);

    return Array.from({ length: 11 }, (_, index) => {
      const date = new Date(today);
      date.setDate(today.getDate() + index);

      return {
        date,
        label: formatter.format(date),
        summaryLabel: summaryFormatter.format(date),
        weekday: index === 0 ? 'Today' : weekdayFormatter.format(date)
      };
    });
  }
}
