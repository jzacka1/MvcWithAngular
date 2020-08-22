import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let TestService = class TestService {
    constructor(http) {
        this.http = http;
        this.rootUrl = window.location.protocol + '//' + window.location.host + '/';
        this.testUrl = this.rootUrl + 'api/test';
    }
    getTestValues() {
        var result = this.http.get(this.testUrl)
            .subscribe(test => {
            this.test = test;
        }, err => {
            console.log('Recived error:', err);
        }, () => {
            console.log('Complete!');
        });
        return result;
    }
};
TestService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], TestService);
export { TestService };
//# sourceMappingURL=test.service.js.map