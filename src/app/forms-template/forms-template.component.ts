import { Component,ElementRef,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-forms-template',
  templateUrl: './forms-template.component.html',
  styleUrls: ['./forms-template.component.css'],
})
export class FormsTemplateComponent {

  @ViewChild('daneForm') formularz !: NgForm ;
  
  constructor(private dataService : DataService){}

  kierunkowy = this.dataService.kierunkowy;

  dane = {
    imie: '',
    nazwisko: '',
    email: '',
    telefonStacjonarnyKierunkowy:'',
    telefonStacjonarny: '',
    telefonKomorkowy: '',
    odbiorca: '',
  };

  OnSubmit() {
    let odbiorca;
    if (this.dane.odbiorca == 'osobaPrywatna') {
      odbiorca = 'Osoba Prywatna';
    } else {
      odbiorca = 'Firma';
    }

    this.dataService.AddData(
      this.dane.imie, 
      this.dane.nazwisko, 
      this.dane.email, 
      this.dane.telefonStacjonarnyKierunkowy+' '+ this.dane.telefonStacjonarny, 
      this.dane.telefonKomorkowy,
      odbiorca
    );

    alert(
      'Imie: ' +
        this.dane.imie +
        '\n' +
        'Nazwisko: ' +
        this.dane.nazwisko +
        '\n' +
        'Email: ' +
        this.dane.email +
        '\n' +
        'Telefon Stacjonarny: +' +this.dane.telefonStacjonarnyKierunkowy+' '+
        this.dane.telefonStacjonarny +
        '\n' +
        'Telefon Komorkowy: ' +
        this.dane.telefonKomorkowy +
        '\n' +
        'Odbiorca: ' +
        odbiorca
    );
    this.formularz.reset();
  }
}
