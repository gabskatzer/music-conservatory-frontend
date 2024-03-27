import { Component } from '@angular/core';
import { PeopleService } from '../../services/people.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Person } from '../../models/person';


@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrl: './create-person.component.css'
})
export class CreatePersonComponent {
  form: FormGroup;

  selectedDate: NgbDateStruct;
  minDate: NgbDateStruct;
  maxDate: NgbDateStruct;

  constructor(private peopleService: PeopleService, private calendar: NgbCalendar, private router: Router) {
    this.form = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      dateOfBirth: new FormControl(''),
      occupation: new FormControl(''),
      address: new FormControl(''),
      phone1: new FormControl(''),
      phone2: new FormControl(''),
      relationship: new FormControl(''),
      educationalLevel: new FormControl(''),
      studentType: new FormControl(''),
      professor: new FormControl(false),
      student: new FormControl(true),
      commissioned: new FormControl(false)
    });
    this.selectedDate = this.calendar.getToday();
    this.minDate = { year: 1930, month: 1, day: 1 };
    this.maxDate = { year: 2030, month: 12, day: 31 };
  }

  onSubmit(form: FormGroup) {
    const jsDate = new Date(form.value.dateOfBirth.year, form.value.dateOfBirth.month - 1, form.value.dateOfBirth.day);

    const personData = {
      name: form.value.name+"",
      email: form.value.email+"",
      dob: jsDate.toISOString().slice(0, 10),
      occupation: form.value.occupation+"",
      address: form.value.address+"",
      phone1: Number(form.value.phone1),
      phone2: Number(form.value.phone2),
      active:true,
      relationship: form.value.relationship,
      educationalLevel: form.value.educationalLevel,
      studentType: form.value.studentType,
      professor: form.value.professor,
      student: form.value.student,
      commissioned: form.value.commissioned
    };
    this.peopleService.createPerson(personData).subscribe(
      (response) => {
        console.log('Person created successfully:', response);
        this.router.navigate(['/home/peoplelist'])
       
      },
      (error) => {
        console.error('Error creating person:', error);
      }
    );
  }

  onDateSelect(event: any): void {

    // Handle date selection
    console.log('Selected date:', event);
  }

}
