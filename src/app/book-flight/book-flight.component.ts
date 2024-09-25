import { Component } from '@angular/core';
import { FlightService } from '../services/flight.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css'],
})
export class BookFlightComponent {
  firstName: string = ''; // Initialized to empty string
  lastName: string = '';
  email: string = '';
  mobile: string = '';
  source: string = '';
  destination: string = '';
  date: string = '';
  time: string = '';

  constructor(private flightService: FlightService, private router: Router) {}

  bookFlight() {
    const flightData = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      mobile: this.mobile,
      source: this.source,
      destination: this.destination,
      date: this.date,
      time: this.time,
    };

    this.flightService.bookFlight(flightData).subscribe({
      next: (result: any) => {
        console.log('Flight booked successfully', result);
        alert('Flight booked successfully');
        this.router.navigate(['/booked-list']);
        // Reset form after submission
        this.firstName = '';
        this.lastName = '';
        this.email = '';
        this.mobile = '';
        this.source = '';
        this.destination = '';
        this.date = '';
        this.time = '';
      },
      error: (error: any) => {
        console.error('Error booking flight', error);
      },
    });
  }
}
