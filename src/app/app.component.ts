import { Component, ViewEncapsulation } from '@angular/core';
import { LoggingService } from './logging.service';
import { DishService } from './dish.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
  providers: [LoggingService, DishService]
})
export class AppComponent {
  title = 'OsteriaxNg';
}
