// chapter 12
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { FormInputComponent } from './form-input/form-input.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { StatusComponent } from './status/status.component';
import { StatusDirective } from './directives/status.directive';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    imports:      [ BrowserModule,
                    FontAwesomeModule,
                    FormsModule,
                    ReactiveFormsModule],
    declarations: [ AppComponent,
                    ChildComponent,
                    FormInputComponent,
                    HeaderComponent,
                    StatusComponent,
                    StatusDirective,
                    LoginComponent ],
    bootstrap:    [ AppComponent ]
})

export class AppModule {}
