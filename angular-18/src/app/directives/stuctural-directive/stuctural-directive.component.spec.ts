import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StucturalDirectiveComponent } from './stuctural-directive.component';

describe('StucturalDirectiveComponent', () => {
  let component: StucturalDirectiveComponent;
  let fixture: ComponentFixture<StucturalDirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StucturalDirectiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StucturalDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
