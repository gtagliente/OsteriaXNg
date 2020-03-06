import { Component } from '@angular/core';
import { LoggingService } from '../logging.service'
@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent {
  title = 'Reservation Component';
  constructor(private loggingService: LoggingService){
  }

  submitReservation(){
    this.loggingService.logMonitor('ReservationSubmitted');
  }
}
