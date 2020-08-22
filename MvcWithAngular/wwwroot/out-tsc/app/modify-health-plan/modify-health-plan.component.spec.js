import { async, TestBed } from '@angular/core/testing';
import { ModifyHealthPlanComponent } from './modify-health-plan.component';
describe('ModifyHealthPlanComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ModifyHealthPlanComponent]
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
//# sourceMappingURL=modify-health-plan.component.spec.js.map