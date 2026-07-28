import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SuccessComponent } from './success.component';

describe('SuccessComponent', () => {
  let component: SuccessComponent;
  let fixture: ComponentFixture<SuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SuccessComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show the success message and date button', () => {
    const element = fixture.nativeElement as HTMLElement;

    expect(component).toBeTruthy();
    expect(element.querySelector('h1')?.textContent).toContain('Yayyyy! love youuuu');
    expect(element.querySelector('button')?.textContent).toContain("Let's choose a date");
  });
});
