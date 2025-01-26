import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCOntainerComponent } from './ng-container.component';

describe('NgCOntainerComponent', () => {
  let component: NgCOntainerComponent;
  let fixture: ComponentFixture<NgCOntainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgCOntainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgCOntainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
