import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public trips: any = [];

  constructor(
    private router: Router
  ) {

  }

  ngOnInit() {
    // Check if there is any trips saved in the Browser and list them.
    if (window.localStorage.getItem("mbta_trips")) {
      this.trips = JSON.parse(window.localStorage.getItem("mbta_trips"));
      // Reverse array to see latest trips first.
      this.trips.reverse();
    }
  }

  // View single trip and QRCode.
  viewTicket(trip) {
    this.router.navigate(['view-ticket'], { queryParams: { special: JSON.stringify(trip) } });
  }

  // Move user to the Origin Station Selection.
  buyTickets() {
    this.router.navigate(['origin-station']);
  }

}
