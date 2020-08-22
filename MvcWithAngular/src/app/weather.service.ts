import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { WeatherForecast } from './models/weatherForecast/weather-forecast';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

	constructor(private http: HttpClient) {
		//this.getWeatherForecast();
		//this.weather = new WeatherForecast();
	}

	private weatherUrl = 'https://localhost:44399/weatherforecast'

	// Http Options
	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json; charset=utf-8',
			'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
		})
	}

	public fat = 'Fear me';
	public weather: WeatherForecast;

	getWeatherForecast() {
		var result = this.http.get<WeatherForecast>(this.weatherUrl, { headers: this.httpOptions.headers })
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
		} else {
			// Get server-side error
			errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
		}
		console.log(errorMessage);
		return throwError(errorMessage);
	}
}
