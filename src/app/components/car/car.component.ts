import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ICar } from 'src/types';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {
  @Input() car: ICar = { name: '', isSold: false};
  constructor() { }

  ngOnInit(): void {
  }

  getClass() {
    return {
      'bg-red-200': this.car.isSold === false,
      'bg-green-100': this.car.isSold,
    }
  }

  onBuy() {
    this.car.isSold = true;
  }
  
  onRemove() {
    this.car.isSold = false;
  }

}
