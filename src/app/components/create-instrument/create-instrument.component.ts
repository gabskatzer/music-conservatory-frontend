import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InstrumentService } from '../../services/instrument.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-instrument',
  templateUrl: './create-instrument.component.html',
  styleUrl: './create-instrument.component.css'
})
export class CreateInstrumentComponent {

  form: FormGroup;

  constructor(private instrumentService: InstrumentService, private router: Router){
    this.form = new FormGroup({
      name: new FormControl(''),
      individual: new FormControl("", Validators.required)
    });
  }

  onSubmit(form: FormGroup){
    console.log(form.value.individual)
    const instrumentData = {
      name: form.value.name+"",
      individual: form.value.individual
    };
    this.instrumentService.createInstrument(instrumentData).subscribe(
      (response)=> {
        console.log('Instrument created successfully: ', response);
        this.router.navigate(['/home/instrumentslist'])
      },
      (error) => {
        console.log('Error creating instrument', error);
      }
    )
  }

}
