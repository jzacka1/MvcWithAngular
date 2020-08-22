import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Plans } from '../models/healthPlans/plans';
let HealthPlansComponentComponent = class HealthPlansComponentComponent {
    constructor(healthPlansService) {
        this.healthPlansService = healthPlansService;
        this.plan = new Plans();
        healthPlansService.getHealthPlans();
    }
    //constructor() {
    //}
    ngOnInit() {
    }
};
HealthPlansComponentComponent = __decorate([
    Component({
        selector: 'app-health',
        templateUrl: './health-plans-component.component.html',
        styleUrls: ['./health-plans-component.component.css']
    })
], HealthPlansComponentComponent);
export { HealthPlansComponentComponent };
//# sourceMappingURL=health-plans-component.component.js.map