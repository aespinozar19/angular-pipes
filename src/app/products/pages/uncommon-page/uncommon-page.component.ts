import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18n Select
  public name:string = 'Anthony';
  public gender: 'male'|'female' = 'male';

  public invitationMap = {
    'male': 'invitarlo',
    'female':'invitarla'
  }

  changeClient(): void {
    this.name = 'Melissa';
    this.gender = 'female';
  }

  //i18n Plural
  public clients: string[] = ['Pablo','Fernando','Johana', 'Cachetes', 'Tony']
  public clientsMap = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando.',
    'other': 'tenemos # clientes esperando.',
  }


  deleteClient(): void {
    this.clients.shift();
  }

  //KeyValue Pipe
  public person= {
    name: 'Anthony',
    age: 32,
    address: 'Lima, Perú'
  }

  //Async Pipe
  public myObservableTimer = interval( 2000 )
    .pipe(
      tap( value => console.log('tap', value))
    );

    public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
      setTimeout(() => {
        resolve('Tenemos data en la promesa.');
        console.log('Tenemos data en la promesa.');
        this.person.name = 'Cambio de nombre en promesa';
      }, 3500);
    } )

}
