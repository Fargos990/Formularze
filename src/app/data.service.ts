import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: {
    imie:string,
    nazwisko:string,
    email:string,
    stacjonarny:string,
    komorkowy:string,
    odbiorca:string
  }[] = [
    {imie:'Janusz',nazwisko:'Kowalski',email:'janusz.kowalski@onet.com',stacjonarny:'17 167543',komorkowy:'887654233',odbiorca:'Osoba Prywatna'},
  {imie:'Adam',nazwisko:'Budowlaniec',email:'adam223@gmail.com',stacjonarny:'23 177623',komorkowy:'965443723','odbiorca':'Firma'}];
  
  kierunkowy = ['12','13','14','15','16','17','18','22','23','24','32','41','44','63','71']

  duzaPierwszaLitera(temp : string) {
    return temp.charAt(0).toUpperCase() + temp.slice(1);
  }

  AddData(imie: string, nazwisko: string, email: string, stacjonarny: string, komorkowy: string, odbiorca: string)
  {
    email = email.toLowerCase();
    imie = this.duzaPierwszaLitera(imie);
    nazwisko = this.duzaPierwszaLitera(nazwisko);
    this.data.push({imie,nazwisko,email,stacjonarny,komorkowy,odbiorca});
  }
  RemoveData(index : number)
  {
    this.data.splice(index,1);
  }
}
