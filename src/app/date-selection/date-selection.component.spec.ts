import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DateSelectionComponent } from './date-selection.component';

describe('DateSelectionComponent', () => {
  let component: DateSelectionComponent;
  let fixture: ComponentFixture<DateSelectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DateSelectionComponent]
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
});
