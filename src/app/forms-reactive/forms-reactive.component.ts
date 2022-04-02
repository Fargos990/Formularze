import { Component,ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-forms-reactive',
  templateUrl: './forms-reactive.component.html',
  styleUrls: ['./forms-reactive.component.css']
})
export class FormsReactiveComponent 
{
  @ViewChild('formularz') formularz !: FormControl ;

  constructor(private dataService : DataService){}

  kierunkowy = this.dataService.kierunkowy;

  dane = new FormGroup(
  {
    kontaktowe: new FormGroup(
    {
      imie: new FormControl('',[Validators.pattern('[a-zA-Z]*'),Validators.required]),
      nazwisko: new FormControl('',[Validators.pattern('[a-zA-Z]*'),Validators.minLength(4),Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email]),
      stacjonarny: new FormGroup({
        kierunkowy: new FormControl('',[Validators.required]),
        numer: new FormControl('',[Validators.required,Validators.pattern('[0-9]*'),Validators.maxLength(7),Validators.minLength(7)]),
      }),
      komorkowy: new FormControl('',[Validators.required,Validators.pattern('[0-9]*'),Validators.maxLength(9),Validators.minLength(9)]),
    }),
    odbiorca: new FormControl('',[Validators.required]),
  });

  OnSubmit() {
    const temp = this.dane.value;
    let odbiorca;
    if (temp.odbiorca == 'osobaPrywatna') {
      odbiorca = 'Osoba Prywatna';
    } else {
      odbiorca = 'Firma';
    }
    
    this.dataService.AddData(
      temp.kontaktowe.imie,
      temp.kontaktowe.nazwisko,
      temp.kontaktowe.email,
      temp.kontaktowe.stacjonarny.kierunkowy+' '+temp.kontaktowe.stacjonarny.numer,
      temp.kontaktowe.komorkowy,
      odbiorca
      );
    
    alert(
      'Imie: ' +
        temp.kontaktowe.imie +
        '\n' +
        'Nazwisko: ' +
        temp.kontaktowe.nazwisko +
        '\n' +
        'Email: ' +
        temp.kontaktowe.email +
        '\n' +
        'Telefon Stacjonarny: +' +temp.kontaktowe.stacjonarny.kierunkowy+' '+
        temp.kontaktowe.stacjonarny.numer +
        '\n' +
        'Telefon Komorkowy: ' +
        temp.kontaktowe.komorkowy +
        '\n' +
        'Odbiorca: ' +
        odbiorca
    );
    this.formularz.reset();
  }

}
