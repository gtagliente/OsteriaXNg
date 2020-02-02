import { Component, ViewEncapsulation } from '@angular/core';

import {MenuItem} from './menu-item.model'
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent {
  dish: MenuItem = new MenuItem('English Breakfast Test', '15.85', 'Description-Test', 'assets/img/menu/item-2.jpg');
  dish2: MenuItem = new MenuItem('Chinese Breakfast Test', '9.85', 'Description-Test2', 'assets/img/menu/item-2.jpg');

  title = 'Menu Component';


}
