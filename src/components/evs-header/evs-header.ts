import { Component } from '@angular/core';

/**
 * Generated class for the EvsHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'evs-header',
  templateUrl: 'evs-header.html'
})
export class EvsHeaderComponent {

  text: string;

  constructor() {
    console.log('Hello EvsHeaderComponent Component');
    this.text = 'Hello World';
  }

}
