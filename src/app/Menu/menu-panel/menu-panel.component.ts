import {
   Component,
   ViewEncapsulation,
   Input,
   OnInit,
   OnChanges
 } from '@angular/core';

import {MenuItem} from '../menu-item.model';

import { DishService } from '../../dish.service';

@Component({
  selector: 'app-menu-panel',
  templateUrl: './menu-panel.component.html',
  styleUrls: ['./menu-panel.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MenuPanelComponent implements OnInit,OnChanges {
    @Input() paneType: string;

  dishList: MenuItem[];

  constructor(private dishService: DishService) {
   // this.paneType = 'Breakfast';
  }

  ngOnInit() {
   // this.dishList = this.dishService.getDishesByType(this.paneType);
    this.dishList = this.dishService.getDishesByType(this.paneType);
  }

  ngOnChanges(){
    this.dishList = this.dishService.getDishesByType(this.paneType);
  }
}
