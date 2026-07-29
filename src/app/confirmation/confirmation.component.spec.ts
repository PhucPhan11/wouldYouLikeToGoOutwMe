import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { ConfirmationComponent } from './confirmation.component';

describe('ConfirmationComponent', () => {
  let fixture: ComponentFixture<ConfirmationComponent>;

  beforeEach(async () => {
    spyOn(window, 'fetch').and.resolveTo(new Response());

    await TestBed.configureTestingModule({
      imports: [ConfirmationComponent],
      providers: [{
        provide: ActivatedRoute,
        useValue: {
          snapshot: {
            queryParamMap: convertToParamMap({
              date: 'Thursday, Jul 30',
              time: '5:00 PM',
              activity: "I'll pick something super unique"
            })
          }
        }
      }]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmationComponent);
    fixture.detectChanges();
  });

  it('should show the selected date details', () => {
    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelector('.eyebrow')?.textContent).toContain('LOCKED IN');
    expect(element.querySelector('h1')?.textContent).toContain("It's a date.");
    expect(element.querySelector('.summary')?.textContent).toContain(
      "Thursday, Jul 30 at 5:00 PM • I'll pick something super unique"
    );
  });
});
