import { Component, OnInit } from '@angular/core';
import { ICar } from 'src/types';
import { CarService } from './cars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [CarService],
})
export class AppComponent implements OnInit {
  cars: ICar[] = [];
  constructor(private carService: CarService) {

  }

  ngOnInit() {
    this.cars = this.carService.cars;
  }
 }
