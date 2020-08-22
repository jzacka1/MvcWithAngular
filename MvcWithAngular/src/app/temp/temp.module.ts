import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HealthPlansComponentComponent } from '../health-plans-component/health-plans-component.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'
import { ModifyHealthPlanComponent } from '../modify-health-plan/modify-health-plan.component';


@NgModule({
  declarations: [
		HealthPlansComponentComponent,
		ModifyHealthPlanComponent
  ],
  imports: [
	CommonModule,
	  BrowserModule,
	  HttpClientModule,
	  FormsModule
	],
  exports: [
	  HealthPlansComponentComponent
  ],
  bootstrap: [
	  HealthPlansComponentComponent
  ]
})
export class TempModule { }
