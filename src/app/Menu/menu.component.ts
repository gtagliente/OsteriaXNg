import { Component, ViewEncapsulation } from '@angular/core';

import {LoggingService} from '../logging.service';
import { logging } from 'protractor';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent {
  public selectedPaneType = 'Breakfast';

  constructor(private loggingService: LoggingService){

  }
  public selectType(str){
    this.loggingService.logMonitor('Selected Pane Type:' + str);
    this.selectedPaneType = str;
  }
}
