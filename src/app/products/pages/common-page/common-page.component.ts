import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-common-page',
  templateUrl: './common-page.component.html',
  styleUrls: ['./common-page.component.css']
})
export class CommonPageComponent {

  // i18n Selenct
  public name: string = 'Yurielvi';
  public gender: 'male'| 'female' = 'male';
  public invitacionMap = {
    'male': 'invitarlo',
    'female': 'invitarla',
  }



  changeClient():void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18nPlural
  public clients: string[]=['Melissa', 'Natalia', 'Marcos', 'Ana', 'Fernando', 'Yia', 'Elianny', 'Saili', 'Zaily' ]
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos dos cliente esperando.',
    'other': 'tenemos # clientes esperando.',

  }
 
  deleteClient(): void {
    this.clients.shift();
  }

  // JSON
  public person = {
    name:'Yurielvi',
    age: 29,
    address: 'Otawa, Canada'
  }

  // async pipe
  public myObservableTimer: Observable <number> = interval(5000).pipe(
    tap( value => console.log('tap', value))
  );

}
