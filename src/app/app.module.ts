import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DropdownListComponent } from './CascadingDropdownList/dropdown-list/dropdown-list.component';
import { LoginFirebaseComponent } from './Authontication/login-firebase/login-firebase.component';
import { ParentComponent } from './ComponentCommunication/Input/parent/parent.component';
import { ChildComponent } from './ComponentCommunication/Input/child/child.component';
import { InterpolationComponent } from './Data-Binding/interpolation/interpolation.component';
import { ModalModule } from 'ngx-bootstrap/modal';

import { DetailsTableComponent } from './CascadingDropdownList/details-table/details-table.component';
import { HomeComponent } from './routerEvent/home/home.component';
import { AboutUsComponent } from './routerEvent/about-us/about-us.component';
import { ContactUsComponent } from './routerEvent/contact-us/contact-us.component';
import { ListComponent } from './routerEvent/list/list.component';
import { QuizComponent } from './QuizApp/quiz/quiz.component';
@NgModule({
  declarations: [
    AppComponent,
    ReactiveFormComponent,
    DropdownListComponent,
    LoginFirebaseComponent,
    ParentComponent,
    ChildComponent,
    InterpolationComponent,
    DetailsTableComponent,
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    ListComponent,
    QuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,//dataBinding
    ReactiveFormsModule,//1.
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
