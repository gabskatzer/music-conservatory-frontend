import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { CreatePersonComponent } from './components/create-person/create-person.component';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { CreateInstrumentComponent } from './components/create-instrument/create-instrument.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UpdatePersonComponent } from './components/update-person/update-person.component';
import { CreateClassComponent } from './components/create-class/create-class.component';
import { CreateCourseComponent } from './components/create-course/create-course.component';
import { InstrumentsListComponent } from './instruments-list/instruments-list.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    CreatePersonComponent,
    NavbarComponent,
    LoginComponent,
    CreateInstrumentComponent,
    HomeComponent,
    UpdatePersonComponent,
    CreateClassComponent,
    CreateCourseComponent,
    InstrumentsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
