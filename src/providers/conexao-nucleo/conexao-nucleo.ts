import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Storage } from '@ionic/storage';
/*
  Generated class for the ConexaoNucleoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConexaoNucleoProvider {

  headers = new Headers({ 'Content-Type': 'application/json'});
  options = new RequestOptions({ headers: this.headers });
  url     = "http://localhost:5001"

  constructor(public http: Http) {
    console.log('Hello ConexaoNucleoProvider Provider');
  }

  setTimer(timer){
    var body = {
      timer: timer
    }
    return this.http.post(this.url+"/mudarTimer",body, this.options)
      .map(this.extractData)
      .catch(this.handleErrorObservable)
  }

  private extractData(res: Response) {
    let body = res.json();
    return body
  }

  private handleErrorObservable(error: Response) {
    let err = error.json()
    console.log(err)
    return Observable.throw(err);
  }


}
