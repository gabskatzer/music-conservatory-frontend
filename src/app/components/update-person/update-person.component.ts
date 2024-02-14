import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PeopleService } from '../../services/people.service';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-update-person',
  templateUrl: './update-person.component.html',
  styleUrl: './update-person.component.css'
})
export class UpdatePersonComponent {
  form: FormGroup = new FormGroup({});
  id: number = 0;

  selectedDate: NgbDateStruct;
  minDate: NgbDateStruct;
  maxDate: NgbDateStruct;

  constructor(private peopleService: PeopleService, private calendar: NgbCalendar, private router: Router, private route: ActivatedRoute) {
    
    this.form = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      dateOfBirth: new FormControl(''),
      occupation: new FormControl(''),
      address: new FormControl(''),
      phone1: new FormControl(''),
      phone2: new FormControl(''),
    });

    this.selectedDate = this.calendar.getToday();
    this.minDate = { year: 1930, month: 1, day: 1 };
    this.maxDate = { year: 2030, month: 12, day: 31 };

    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id =  Number(params.get('id'));
    });
  }

  ngOnInit(): void {
    this.peopleService.getPersonById(this.id).subscribe(
      data => {
        console.log(data);
        var d = new Date(data.dob);
        console.log("hey", {year: d.getFullYear(), month: d.getMonth(), day: d.getDate()});
        this.form = new FormGroup({
          name: new FormControl(data.name),
          email: new FormControl(data.email),
          dateOfBirth: new FormControl({year: d.getFullYear(), month: d.getMonth()+1, day: d.getDate()}),
          occupation: new FormControl(data.occupation),
          address: new FormControl(data.address),
          phone1: new FormControl(data.phone1),
          phone2: new FormControl(data.phone2),
        });
      },
      error => console.error('Error fetching person', error)
    );
  }

  
  onDateSelect(event: any): void {
    console.log('Selected date:', event);
  }

  updatePerson(form: FormGroup): void {
    const jsDate = new Date(form.value.dateOfBirth.year, form.value.dateOfBirth.month - 1, form.value.dateOfBirth.day);

    const personData = {
      name: form.value.name+"",
      email: form.value.email+"",
      dob: jsDate.toISOString().slice(0, 10),
      occupation: form.value.occupation+"",
      address: form.value.address+"",
      phone1: Number(form.value.phone1),
      phone2: Number(form.value.phone2),
      active:true
    };
    const updatedData = {

    };
    const id = this.id;

    this.peopleService.updatePerson(id, personData).subscribe(
      (response) => {
        console.log('Person updated successfully:', response);
        this.router.navigate(['/home/peoplelist']);
      },
      (error) => {
        console.error('Error updating person:', error);
      }
    );
  }
}
