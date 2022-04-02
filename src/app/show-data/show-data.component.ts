import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-show-data',
  templateUrl: './show-data.component.html',
  styleUrls: ['./show-data.component.css']
})
export class ShowDataComponent {

  constructor(private dataService : DataService){}

  dane = this.dataService.data;
  
  OnClick(index : number)
  {
    this.dataService.RemoveData(index);
  }
}
