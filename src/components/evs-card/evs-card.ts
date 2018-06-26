import { Component } from '@angular/core';

/**
 * Generated class for the EvsCardComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'evs-card',
  templateUrl: 'evs-card.html'
})
export class EvsCardComponent {

  text: string;

  constructor() {
    console.log('Hello EvsCardComponent Component');
    this.text = 'Hello World';
  }

}
