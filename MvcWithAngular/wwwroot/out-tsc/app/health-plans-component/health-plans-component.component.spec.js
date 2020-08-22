import { async, TestBed } from '@angular/core/testing';
import { HealthPlansComponentComponent } from './health-plans-component.component';
describe('HealthPlansComponentComponent', () => {
    let component;
    let fixture;
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HealthPlansComponentComponent]
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
//# sourceMappingURL=health-plans-component.component.spec.js.map