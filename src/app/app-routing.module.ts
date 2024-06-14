
import { NgModule } from '@angular/core';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { RouterModule } from '@angular/router';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';

const routes = [
	  {
		path: 'home',
		component: HomePageComponent
	  },
	  {
		path : 'about',
		component: AboutPageComponent
	  }
	  ,{
		path: 'contact',
		 component: ContactPageComponent

	  }	  ,{
		path: '**',
		redirectTo: 'home'
	  }
	];

@NgModule({
	imports:[RouterModule.forRoot(routes)],
	exports:[RouterModule]
})

export class AppRoutingModule{}