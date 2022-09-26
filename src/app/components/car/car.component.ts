import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { ConsoleService } from 'src/app/console.service';
import { ICar } from 'src/types';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss'],
})
export class CarComponent implements OnInit {
  @Input() car: ICar = { name: '', isSold: false};
  constructor(private consoleService: ConsoleService) { }

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
    this.consoleService.log(`${this.car.name} status buy`)
  }
  
  onRemove() {
    this.car.isSold = false;
    this.consoleService.log(`${this.car.name} status return}`)
  }

}
