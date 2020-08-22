import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthPlansComponentComponent } from './health-plans-component.component';

describe('HealthPlansComponentComponent', () => {
  let component: HealthPlansComponentComponent;
  let fixture: ComponentFixture<HealthPlansComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthPlansComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthPlansComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
