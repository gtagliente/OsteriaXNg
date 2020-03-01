import { Component, OnInit, Input,ViewEncapsulation } from '@angular/core';

import { MenuItem } from '../menu-item.model';
@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MenuItemComponent implements OnInit {
  @Input() item: MenuItem;

  constructor() { }

  ngOnInit() {
  }

}
