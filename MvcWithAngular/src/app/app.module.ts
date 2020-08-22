import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { HealthPlansComponentComponent } from './health-plans-component/health-plans-component.component';
import { TempModule } from './temp/temp.module';
import { ModifyHealthPlanComponent } from './modify-health-plan/modify-health-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
	HttpClientModule,
	TempModule
  ],
  providers: [],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
