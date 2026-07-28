import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YesNoButtonComponent } from './yes-no-button.component';

describe('YesNoButtonComponent', () => {
  let component: YesNoButtonComponent;
  let fixture: ComponentFixture<YesNoButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YesNoButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YesNoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the No label and button scales until the final label', () => {
    component.onNoClick();

    expect(component.noLabel).toBe('Are you sure?');
    expect(component.yesScale).toBe(1.15);
    expect(component.noScale).toBe(0.85);

    for (let index = 0; index < 10; index++) {
      component.onNoClick();
    }

    expect(component.noLabel).toBe('Yes, pleaseeeee');
    expect(component.yesScale).toBe(1.75);
    expect(component.noScale).toBe(0.25);
  });
});
