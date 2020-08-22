import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
let HealthPlansService = class HealthPlansService {
    constructor(http) {
        this.http = http;
        this.rootUrl = window.location.protocol + '//' + window.location.host + '/';
        this.healthPlanUrl = this.rootUrl + 'api/Plans';
        // Http Options
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    getHealthPlans() {
        var result = this.http.get(this.healthPlanUrl)
            .subscribe((plans) => {
            this.plans = plans;
        }, err => {
            console.log('Received error:', err);
        }, () => {
            console.log('Complete!');
        });
        return result;
    }
    addHealthPlan(plan) {
        let result = this.http.post(this.healthPlanUrl, plan)
            .subscribe(success => {
            console.log("Sucess:", success);
        }, err => {
            console.log('Received error:', err);
        });
        this.getHealthPlans();
        return result;
    }
    changeHealthPlan(planId, plan) {
        let url = this.healthPlanUrl + "/" + planId;
        let result = this.http.put(url, plan)
            .subscribe(success => {
            console.log("Sucess:", success);
        }, err => {
            console.log('Received error:', err);
        });
        return result;
    }
    deleteHealthPlan(planId) {
        let url = this.healthPlanUrl + "/" + planId;
        let result = this.http.delete(url)
            .subscribe(success => {
            console.log("Sucess:", success);
        }, err => {
            console.log('Received error:', err);
        });
        return result;
    }
};
HealthPlansService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], HealthPlansService);
export { HealthPlansService };
//# sourceMappingURL=health-plans.service.js.map