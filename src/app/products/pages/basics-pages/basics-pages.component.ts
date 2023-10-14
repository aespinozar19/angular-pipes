import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-pages',
  templateUrl: './basics-pages.component.html',
  styleUrls: ['./basics-pages.component.css']
})
export class BasicsPagesComponent {

  public nameLower: string = 'anthony';
  public nameUpper: string = 'ANTHONY';
  public fullName: string = 'AnThONy EsPiNoZA';

  public customDate: Date = new Date();

}
