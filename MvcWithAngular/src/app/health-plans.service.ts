import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Plans } from './models/healthPlans/plans';
import { pipe, of, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { ok } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class HealthPlansService {

	constructor(private http: HttpClient) {
	}

	private rootUrl = window.location.protocol + '//' + window.location.host + '/';

	private healthPlanUrl = this.rootUrl + 'api/Plans';

	public plans: Plans[];

	// Http Options
	httpOptions = {
		headers: new HttpHeaders({
			'Content-Type': 'application/json'
		})
	}

	getHealthPlans() {
		var result = this.http.get<Plans[]>(this.healthPlanUrl)
			.subscribe((plans: Plans[]) => {
				this.plans = plans
			},
				err => {
					console.log('Received error:', err)
				},
				() => {
					console.log('Complete!')
				}
			);

		return result;
	}

	addHealthPlan(plan: Plans) {

		let result = this.http.post<Plans>(this.healthPlanUrl, plan)
		.subscribe(
			success => {
				console.log("Sucess:", success);
			},
			err => {
				console.log('Received error:', err)
			}
		);

		this.getHealthPlans();

		return result;
	}

	changeHealthPlan(planId: number, plan: Plans) {

		let url = this.healthPlanUrl + "/" + planId;

		let result = this.http.put<Plans>(url, plan)
			.subscribe(
				success => {
					console.log("Sucess:", success);
				},
				err => {
					console.log('Received error:', err)
				}
			);

		return result;
	}

	deleteHealthPlan(planId: number) {

		let url = this.healthPlanUrl + "/" + planId;

		let result = this.http.delete<Plans>(url)
			.subscribe(
				success => {
					console.log("Sucess:", success);
				},
				err => {
					console.log('Received error:', err)
				}
			);

		return result;
	}
}
