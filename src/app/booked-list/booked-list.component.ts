import { Component, OnInit } from '@angular/core';
import { FlightService } from '../services/flight.service';

@Component({
  selector: 'app-booked-list',
  templateUrl: './booked-list.component.html',
  styleUrls: ['./booked-list.component.css'],
})
export class BookedListComponent implements OnInit {
  bookedFlights: any[] = [];

  constructor(private flightService: FlightService) {
    this.flightService.getBookedFlights().subscribe({
      next: (result: any) => {
        this.bookedFlights = result?.data?.bookedFlights || [];
      },
      error: (error: any) => {
        console.error('Error fetching booked flights', error);
      },
    });
  }

  ngOnInit() {
    this.flightService.getBookedFlights().subscribe({
      next: (result: any) => {
        this.bookedFlights = result?.data?.bookedFlights || [];
      },
      error: (error: any) => {
        console.error('Error fetching booked flights', error);
      },
    });
  }
}
