import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public items: any;
  
  formulaire = {numAbonn:""};

  constructor(navCtrl: NavController, public http: HttpClient) { }

  getFactures() {

    let url = 'http://127.0.0.1:8000/findFacturesForOneAbonnement/' ;

    url+=this.formulaire.numAbonn;

    const data: Observable<any> = this.http.get(url);

    data.subscribe(result => {

      console.log('Juste pour verifier');

      this.items=result;

    });


  }  

}
