import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-tickets',
  templateUrl: 'tickets.page.html',
  styleUrls: ['tickets.page.scss']
})
export class TicketsPage implements OnInit {

  public stations: any = [];
  public filtered_stations: any = [];
  public searchStation: string = "";

  constructor(
    public db: AngularFirestore
  ) {

  }

  ngOnInit() {
    this.db.collection("stations").get().subscribe(stations => {
      stations.forEach(station => {
        let station_data = station.data();
        this.stations.push({
          route: station_data.route,
          line: station_data.line
        });
      });
      this.filtered_stations = this.stations;
    });
  }

  filterStations() {
    this.filtered_stations = [];
    this.stations.filter(station => {
      console.log("Filtered Data", station.route.toLowerCase().indexOf(this.searchStation.toLowerCase()) > -1);
      if (station.route.toLowerCase().indexOf(this.searchStation.toLowerCase()) > -1) {
        this.filtered_stations.push({
          route: station.route,
          line: station.line
        });
      }
    });
  }

  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/tickets', JSON.stringify(item)]);
  // }
}
