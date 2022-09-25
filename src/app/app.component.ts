import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cars = [
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
}
