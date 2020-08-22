import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from './models/github/user'
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GithubService {

	constructor(private http: HttpClient) { }

	private rootUrl = window.location.protocol + '//' + window.location.host + '/';

	private gitHubUrl = this.rootUrl + 'api/GitHub'

	// Http Options
	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
		})
	}

	public user: User;

	getUserByName(userName: string) {
		//const urlLink = this.gitHubUrl + '/GetUserByName?userName=' + userName;
		const urlLink = 'https://api.github.com/users/' + userName;

		var result = this.http.get<User>(urlLink)
			//.pipe(
			//	tap((user: User) => {
			//		this.user = user;
			//		console.log('successs');
			//	}),
			//	catchError(this.handleError<User>('GetGit'))
			//)
			.subscribe((user: User) => {
				this.user = user;
				console.log('Success!  My name is ' + this.user.name)
			},
				err => {
					console.log('Recived error:', err)
				},
				() => {
					console.log('Complete!')
				}
			);

		return result;
		//return this.user;
	}

	private handleError<T>(operation = 'operation', result?: T) {
		return (error: any): Observable<T> => {

			// TODO: send the error to remote logging infrastructure
			console.error(error); // log to console instead

			// TODO: better job of transforming error for user consumption
			this.log(`${operation} failed: ${error.message}`);

			// Let the app keep running by returning an empty result.
			return of(result as T);
		};
	}

	private log(message: string) {
		console.log(message);
	}
}
