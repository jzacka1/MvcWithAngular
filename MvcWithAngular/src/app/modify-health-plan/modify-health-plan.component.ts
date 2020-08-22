import { Component, OnInit } from '@angular/core';
import { HealthPlansService } from '../health-plans.service';
import { Plans } from '../models/healthPlans/plans';

@Component({
  selector: 'app-modify-health-plan',
  templateUrl: './modify-health-plan.component.html',
  styleUrls: ['./modify-health-plan.component.css']
})
export class ModifyHealthPlanComponent implements OnInit {

	constructor(public healthPlansService: HealthPlansService) {
		this.plans = healthPlansService.plans;
	}

	public plans: Plans[];

	//Removes an element that has the name 'plan_' + idNumber,
	//The id is where the modify record is in.
	removeModifyPlan(id : number) {
		document.getElementById('plan_' + id).remove();
	}

  ngOnInit() {
  }

}
