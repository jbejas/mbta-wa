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
    this.db.collection("stations").get().subscribe(stations => {
      stations.forEach(station => {
        let station_data = station.data();
        this.stations.push({
          route: station_data.route,
          line: station_data.line
        });
      });
      this.filtered_stations = this.stations;
      this.loading = false;
    });
  }

  filterStations() {
    this.filtered_stations = [];
    this.stations.filter(station => {
      if (station.route.toLowerCase().indexOf(this.searchStation.toLowerCase()) > -1) {
        this.filtered_stations.push({
          route: station.route,
          line: station.line
        });
      }
    });
  }

  setOriginStation(origin_station) {
    this.router.navigate(['destination-station'], { queryParams: origin_station });
  }

}
