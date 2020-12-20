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
    public selectedPaneType = 'Breakfast';

  dishList: MenuItem[];

  constructor(private dishService: DishService, private route: ActivatedRoute) {
    console.log('Costruttore');

  }

  ngOnInit() {
    console.log('init');
   // this.dishList = this.dishService.getDishesByType(this.paneType);
   // this.selectedPaneType = this.route.snapshot.params['type'];
    this.route.params.subscribe(
        (params:Params) =>{
          this.selectedPaneType = params['type'];
          this.dishList = this.dishService.getDishesByType(this.selectedPaneType);
        }
    );
    this.dishList = this.dishService.getDishesByType(this.selectedPaneType);
  }
}
