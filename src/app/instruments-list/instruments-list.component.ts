import { Component } from '@angular/core';
import { Instrument } from '../models/instrument';
import { InstrumentService } from '../services/instrument.service';
import { response } from 'express';

@Component({
  selector: 'app-instruments-list',
  templateUrl: './instruments-list.component.html',
  styleUrl: './instruments-list.component.css'
})
export class InstrumentsListComponent {

  instruments: Instrument[] = new Array();
  allInstruments: Instrument[] = new Array();
  searchText: string = '';

  constructor(private instrumentService: InstrumentService){}

  ngOnInit(): void{
    this.instrumentService.getAllInstruments().subscribe(
      data => {console.log(data);this.allInstruments = data; this.instruments = data;},
      error => console.error('Error fetching people data', error)
    );
  }

  search(): void {
    this.instruments = this.allInstruments.filter(item =>
      item.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  deleteInstrument(id: number): void {
    this.instrumentService.deleteInstrument(id).subscribe(
      (response) => {
        this.instruments = this.instruments.filter(x => x.id != id);
        console.log('Instrument deleted successfully', response);
      },
      (error) => {
        console.error('Error deleting instrument', error);
      }
    )
  }

}
