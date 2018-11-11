import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
/**
 * Generated class for the RetornoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'retorno',
  templateUrl: 'retorno.html'
})
export class RetornoComponent {

  text: string;

  constructor(public navCtrl: NavController) {
    console.log('Hello RetornoComponent Component');
    this.text = 'Hello World';
  }

}
