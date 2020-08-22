import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TestService {

	constructor(private http: HttpClient) {
		
	}

	private rootUrl = window.location.protocol + '//' + window.location.host + '/';

	private testUrl = this.rootUrl + 'api/test';
	public test: string[];
	
	getTestValues() {
		var result = this.http.get<string[]>(this.testUrl)
			.subscribe(test => {
					this.test = test
			},
				err => {
					console.log('Recived error:', err)
				},
				() => {
					console.log('Complete!')
				}
			);

		return result;
	}
}
