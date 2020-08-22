import { __decorate } from "tslib";
import { Component } from '@angular/core';
let TestComponentComponent = class TestComponentComponent {
    constructor(userService, githubService, weatherService, testService) {
        this.userService = userService;
        this.githubService = githubService;
        this.weatherService = weatherService;
        this.testService = testService;
        githubService.getUserByName('jzacka1');
        this.showTestResults();
    }
    ngOnInit() {
    }
    showMessage() {
        return this.userService.showMessage();
    }
    showUserByName(userName) {
        this.githubService.getUserByName(userName);
        return this._user;
        //.subscribe(data => {
        //	this.user = data
        //});
    }
    showTestResults() {
        return this.testService.getTestValues();
    }
};
TestComponentComponent = __decorate([
    Component({
        selector: 'app-test-component',
        templateUrl: './test-component.component.html',
        styleUrls: ['./test-component.component.css']
    })
], TestComponentComponent);
export { TestComponentComponent };
//# sourceMappingURL=test-component.component.js.map