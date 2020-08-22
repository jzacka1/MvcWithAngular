import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ModifyHealthPlanComponent = class ModifyHealthPlanComponent {
    constructor(healthPlansService) {
        this.healthPlansService = healthPlansService;
        this.plans = healthPlansService.plans;
    }
    //Removes an element that has the name 'plan_' + idNumber,
    //The id is where the modify record is in.
    removeModifyPlan(id) {
        document.getElementById('plan_' + id).remove();
    }
    ngOnInit() {
    }
};
ModifyHealthPlanComponent = __decorate([
    Component({
        selector: 'app-modify-health-plan',
        templateUrl: './modify-health-plan.component.html',
        styleUrls: ['./modify-health-plan.component.css']
    })
], ModifyHealthPlanComponent);
export { ModifyHealthPlanComponent };
//# sourceMappingURL=modify-health-plan.component.js.map