import {
   Component,
   ViewEncapsulation,
   Input,
   OnInit,
   OnChanges
 } from '@angular/core';

import {MenuItem} from '../menu-item.model';

import { DishService } from '../../dish.service';
import { ActivatedRoute,Params } from '@angular/router';
import { Console } from 'console';

@Component({
  selector: 'app-menu-panel',
  templateUrl: './menu-panel.component.html',
  styleUrls: ['./menu-panel.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MenuPanelComponent implements OnInit {
    @Input() paneType: string;
    public selectedPaneType ;

  dishList: MenuItem[];
  newDish :MenuItem;

  constructor(private dishService: DishService, private route: ActivatedRoute) {
    console.log('Costruttore');
    this.newDish = new MenuItem ('NEWDISH','Add here your dish', '$$', 'Add here your description', 'assets/img/menu/item-2.jpg');
  }

  ngOnInit() {
    console.log('init');
   // this.dishList = this.dishService.getDishesByType(this.paneType);
    this.route.params.subscribe(
        (params:Params) =>{
          let type : string | undefined;
          type = params['type'];
          if (type == undefined) type = 'Breakfast';
          this.selectedPaneType =type;
          console.log(type);
          this.dishList = this.dishService.getDishesByType(this.selectedPaneType);
        }
    );
  }
}
