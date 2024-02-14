import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-instrument',
  templateUrl: './create-instrument.component.html',
  styleUrl: './create-instrument.component.css'
})
export class CreateInstrumentComponent {

  form: FormGroup = new FormGroup({});

  constructor(){
    this.form = new FormGroup({
      name: new FormControl(''),
    });
  }

  onSubmit(form: FormControl){
    const instrumentData = {
      name: form.value.name
    };
    
  }

}
