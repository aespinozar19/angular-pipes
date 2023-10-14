import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { BasicsPagesComponent } from 'src/app/products/pages/basics-pages/basics-pages.component';
import { NumbersPageComponent } from 'src/app/products/pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from 'src/app/products/pages/uncommon-page/uncommon-page.component';

@Component({
  selector: 'shared-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {

  public menuItems: MenuItem[] = [];

  ngOnInit() {
    this.menuItems = [
      { label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Textos y Fechas',
            icon: 'pi pi-align-left',
            routerLink: '/'
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: 'numbers'
          },
          {
            label: 'No comunes',
            icon: 'pi pi-globe',
            routerLink: 'uncommon'
          },
        ]
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
        items: [
          {
            label: 'Custom Pipes',
            icon: 'pi pi-cog',
            routerLink: 'custom'
          },
      ]
      }
    ];
  }


}
