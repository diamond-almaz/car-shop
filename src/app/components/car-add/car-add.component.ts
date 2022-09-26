import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CarService } from 'src/app/cars.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.scss'],
})
export class CarAddComponent implements OnInit {

  carName: string = '';

  constructor(private carService: CarService) {

  }

  ngOnInit(): void {
  }

  onAdd() {
    this.carService.addCar(this.carName);

    this.carName = '';
  }

}
