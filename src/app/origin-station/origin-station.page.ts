import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-origin-station',
  templateUrl: './origin-station.page.html',
  styleUrls: ['./origin-station.page.scss'],
})
export class OriginStationPage implements OnInit {

  public stations: any = [];
  public filtered_stations: any = [];
  public searchStation: string = "";
  public loading: boolean = true;

  constructor(
    private router: Router,
    public db: AngularFirestore
  ) {

  }

  ngOnInit() {
    // Query Firebase Firestore Stations Collection and populate object
    this.db.collection("stations").get().subscribe(stations => {
      stations.forEach(station => {
        let station_data = station.data();
        this.stations.push({
          route: station_data.route,
          line: station_data.line
        });
      });
      // Populate Dummy object to be able to filter without mutating original stations object.
      this.filtered_stations = this.stations;
      this.loading = false;
    });
  }

  filterStations() {
    // Reset filtered stations object.
    this.filtered_stations = [];
    // Filter main stations object and populate dummy object with results.
    this.stations.filter(station => {
      if (station.route.toLowerCase().indexOf(this.searchStation.toLowerCase()) > -1) {
        this.filtered_stations.push({
          route: station.route,
          line: station.line
        });
      }
    });
  }

  // Get origin station selected and send data to destination station selections for further usage.
  setOriginStation(origin_station) {
    this.router.navigate(['destination-station'], { queryParams: origin_station });
  }

}
