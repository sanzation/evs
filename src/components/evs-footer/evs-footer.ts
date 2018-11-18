import { Component } from '@angular/core';

/**
 * Generated class for the EvsFooterComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'evs-footer',
  templateUrl: 'evs-footer.html'
})
export class EvsFooterComponent {

  text: string;

  constructor() {
    console.log('Hello EvsFooterComponent Component');
    this.text = 'Hello World';
  }

}
