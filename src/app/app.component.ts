import { Component } from '@angular/core';
import { ICar } from 'src/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cars: ICar[] = [
    {
      name: 'Ford',
      isSold: false,
    },
    {
      name: 'BMW',
      isSold: false,
    },
    {
      name: 'Toyota',
      isSold: true,
    },
  ]

  addCarToList(carName: string) {
    this.cars.push({
      name: carName,
      isSold: false,
    })
  }
}
