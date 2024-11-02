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
});
