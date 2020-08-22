import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyHealthPlanComponent } from './modify-health-plan.component';

describe('ModifyHealthPlanComponent', () => {
  let component: ModifyHealthPlanComponent;
  let fixture: ComponentFixture<ModifyHealthPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyHealthPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifyHealthPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
