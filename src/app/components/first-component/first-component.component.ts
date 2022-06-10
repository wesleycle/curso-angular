import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.scss']
})
export class FirstComponentComponent implements OnInit {

  name: string = 'Wesley';
  age: number = 33;
  hobbies = ['Correr','Jogar','Estudar'];
  car = {
    name: 'Corsa',
    year: 1988
  }

  constructor() { }

  ngOnInit(): void {
  }

}
