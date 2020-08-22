import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
let GithubService = class GithubService {
    constructor(http) {
        this.http = http;
        this.rootUrl = window.location.protocol + '//' + window.location.host + '/';
        this.gitHubUrl = this.rootUrl + 'api/GitHub';
        // Http Options
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        };
    }
    getUserByName(userName) {
        //const urlLink = this.gitHubUrl + '/GetUserByName?userName=' + userName;
        const urlLink = 'https://api.github.com/users/' + userName;
        var result = this.http.get(urlLink)
            //.pipe(
            //	tap((user: User) => {
            //		this.user = user;
            //		console.log('successs');
            //	}),
            //	catchError(this.handleError<User>('GetGit'))
            //)
            .subscribe((user) => {
            this.user = user;
            console.log('Success!  My name is ' + this.user.name);
        }, err => {
            console.log('Recived error:', err);
        }, () => {
            console.log('Complete!');
        });
        return result;
        //return this.user;
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return of(result);
        };
    }
    log(message) {
        console.log(message);
    }
};
GithubService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], GithubService);
export { GithubService };
//# sourceMappingURL=github.service.js.map