import { Component } from '@angular/core';
import { Person } from '../../models/person';
import { PeopleService } from '../../services/people.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrl: './people-list.component.css'
})
export class PeopleListComponent {
  people: Person[] = new Array();
  searchText: string = '';

  constructor(private peopleService: PeopleService){}

  ngOnInit(): void {
    this.peopleService.getAllPeople().subscribe(
      data => {console.log(data);this.people = data;},
      error => console.error('Error fetching people data', error)
    );
  }

  search(): void {
    this.people = this.people.filter(item =>
      item.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  deletePerson(id: number): void {
    this.peopleService.deletePerson(id).subscribe(
      (response) => {
        this.people = this.people.filter( x => x.id != id);
        console.log('Person deleted successfully:', response);
      },
      (error) => {
        console.error('Error deleting person:', error);
      }
    );
  }

  
}
