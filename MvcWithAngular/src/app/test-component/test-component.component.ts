import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { GithubService } from '../github.service';

import { User } from '../models/github/user'
import { Observable } from 'rxjs';
import { WeatherService } from '../weather.service';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {

	constructor(public userService: UserService, public githubService: GithubService, public weatherService: WeatherService, public testService: TestService) {
		githubService.getUserByName('jzacka1');
		this.showTestResults();
	}
	
	message: string;

	_user: User;

	ngOnInit() {
	}

	showMessage(): string {
		return this.userService.showMessage();
	}

	showUserByName(userName: string) {
		this.githubService.getUserByName(userName);

		return this._user;
			//.subscribe(data => {
			//	this.user = data
			//});
	}

	showTestResults() {
		return this.testService.getTestValues();
	}

}
