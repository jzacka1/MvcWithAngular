import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
let WeatherService = class WeatherService {
    constructor(http) {
        this.http = http;
        this.weatherUrl = 'https://localhost:44399/weatherforecast';
        // Http Options
        this.httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json; charset=utf-8',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
            })
        };
        this.fat = 'Fear me';
        //this.getWeatherForecast();
        //this.weather = new WeatherForecast();
    }
    getWeatherForecast() {
        var result = this.http.get(this.weatherUrl, { headers: this.httpOptions.headers })
            //.pipe(
            //	retry y(1),
            //	catchError(this.errorHandl)
            //)
            .subscribe(weather => {
            this.weather = weather;
        });
        return result;
    }
    // Error handling
    errorHandl(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
};
WeatherService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], WeatherService);
export { WeatherService };
//# sourceMappingURL=weather.service.js.map