import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfElseExamplesComponent } from './if-else-examples.component';

describe('IfElseExamplesComponent', () => {
  let component: IfElseExamplesComponent;
  let fixture: ComponentFixture<IfElseExamplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfElseExamplesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IfElseExamplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
