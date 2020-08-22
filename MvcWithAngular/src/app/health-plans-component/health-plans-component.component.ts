import { Component, OnInit } from '@angular/core';
import { HealthPlansService } from '../health-plans.service';
import { Plans } from '../models/healthPlans/plans';

@Component({
  selector: 'app-health',
  templateUrl: './health-plans-component.component.html',
  styleUrls: ['./health-plans-component.component.css']
})
export class HealthPlansComponentComponent implements OnInit {

	constructor(public healthPlansService: HealthPlansService) {
		healthPlansService.getHealthPlans();
	}

	public plan = new Plans();

	//constructor() {
	//}

  ngOnInit() {
  }

}
