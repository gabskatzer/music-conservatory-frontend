import { Component } from '@angular/core';
import { Person } from '../../models/person';
import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.css'
})
export class PeopleListComponent {
  people: Person[] = new Array();

  constructor(private peopleService: PeopleService){}

  ngOnInit(): void {
    this.peopleService.getAllPeople().subscribe(
      data => {console.log(data);this.people = data;},
      error => console.error('Error fetching people data', error)
    );
  }
}
