import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ConexaoNucleoProvider } from '../../providers/conexao-nucleo/conexao-nucleo';
import { MenuPage } from '../menu/menu'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private _provider: ConexaoNucleoProvider) {

  }

  mudarTimer(){
    this._provider.setTimer([1,1,1]).subscribe(resp=>{
      console.log(resp)
    })
  }

  acessar(){
    this.navCtrl.push(MenuPage)
  }

}
