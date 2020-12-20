import { Component, ViewEncapsulation } from '@angular/core';

import {LoggingService} from '../logging.service';
import { logging } from 'protractor';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent {

  constructor(private loggingService: LoggingService, private route: ActivatedRoute){

  }

  ngOnInit() {
  }


}
