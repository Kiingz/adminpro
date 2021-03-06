import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { APP_ROUTES } from './app.routes';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { PagesComponent } from './pages/pages.component';
import { ServiceModule } from './services/service.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
	declarations: [ AppComponent, LoginComponent, RegisterComponent, PagesComponent ],
	imports: [ BrowserModule, APP_ROUTES, FormsModule, ReactiveFormsModule, ServiceModule, SharedModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
