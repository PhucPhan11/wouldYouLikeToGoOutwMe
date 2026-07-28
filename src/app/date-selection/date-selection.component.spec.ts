import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, Router } from '@angular/router';
import { DateSelectionComponent } from './date-selection.component';

describe('DateSelectionComponent', () => {
  let component: DateSelectionComponent;
  let fixture: ComponentFixture<DateSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateSelectionComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(DateSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create today plus the next ten date options', () => {
    expect(component.dateOptions).toHaveSize(11);
    expect(component.dateOptions[0].weekday).toBe('Today');
  });

  it('should update the confirmation label when selections change', () => {
    component.selectDate(component.dateOptions[1]);
    component.selectTime(component.timeOptions[1]);
    component.selectActivity('Walk in the park');

    expect(component.confirmLabel).toBe(
      `Lock in ${component.dateOptions[1].label} at 6:00 PM — Walk in the park`
    );
  });

  it('should pass the selected values to the confirmation route', () => {
    const router = TestBed.inject(Router);
    const navigate = spyOn(router, 'navigate');
    component.selectDate(component.dateOptions[1]);
    component.selectTime(component.timeOptions[1]);
    component.selectActivity('Walk in the park');

    component.onConfirm();

    expect(navigate).toHaveBeenCalledWith(['/confirmation'], {
      queryParams: {
        date: component.dateOptions[1].summaryLabel,
        time: '6:00 PM',
        activity: 'Walk in the park'
      }
    });
  });
});
