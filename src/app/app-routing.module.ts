import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { CreatePersonComponent } from './components/create-person/create-person.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CreateInstrumentComponent } from './components/create-instrument/create-instrument.component';
import { UpdatePersonComponent } from './components/update-person/update-person.component';
import { InstrumentsListComponent } from './instruments-list/instruments-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent ,
      children: [
        { path: 'peoplelist', component: PeopleListComponent },
        { path: 'createperson', component: CreatePersonComponent},
        { path: 'updateperson/:id', component: UpdatePersonComponent},
        { path: 'instrumentslist', component: InstrumentsListComponent},
        { path: 'createinstrument', component: CreateInstrumentComponent},

      ]
},
  { path: '', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
