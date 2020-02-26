// chapter 12
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ChildComponent } from './child/child.component';
import { FormInputComponent } from './form-input/form-input.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StatusComponent } from './status/status.component';
import { StatusDirective } from './directives/status.directive';
import { LoginComponent } from './login/login.component';

@NgModule({
    imports:      [ BrowserModule,
                    FontAwesomeModule,
                    FormsModule],
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
