import { Injectable } from "@angular/core";
import { ICar } from "src/types";
import { ConsoleService } from "./console.service";

@Injectable()
export class CarService {

  constructor(private consoleService: ConsoleService) {
    
  }
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

  addCar(name: string) {
    this.cars.push({
      name,
      isSold: false,
    })
    this.consoleService.log(name);
  }
}