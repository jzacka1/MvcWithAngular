import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { TempModule } from './app/temp/temp.module';

if (environment.production) {
  enableProdMode();
}

//  You can call different modules depending on which page you're opening.
//  To use another component in another view, use put the component in a different module,
//  and place it in here.

// If a view called, HealthPlansAngular, is called, then the Temp module is called,
// otherwise, call the AppModule.
if (window.location.href.indexOf("HealthPlansAngular") != -1) {
	platformBrowserDynamic().bootstrapModule(TempModule)
		.catch(err => console.error(err));
}
else {
	platformBrowserDynamic().bootstrapModule(AppModule)
		.catch(err => console.error(err));
}