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
    if (window.localStorage.getItem("mbta_trips")) {
      this.trips = JSON.parse(window.localStorage.getItem("mbta_trips"));
      this.trips.reverse();
    }
  }

  viewTicket(trip) {
    this.router.navigate(['view-ticket'], { queryParams: { special: JSON.stringify(trip) } });
  }

  buyTickets() {
    this.router.navigate(['origin-station']);
  }

}
