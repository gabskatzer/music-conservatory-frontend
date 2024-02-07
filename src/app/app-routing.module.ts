import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PeopleListComponent } from './components/people-list/people-list.component';
import { CreatePersonComponent } from './components/create-person/create-person.component';

const routes: Routes = [
  { path: 'peoplelist', component: PeopleListComponent },
  { path: 'createperson', component: CreatePersonComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
