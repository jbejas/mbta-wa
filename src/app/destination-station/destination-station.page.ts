import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-destination-station',
  templateUrl: './destination-station.page.html',
  styleUrls: ['./destination-station.page.scss'],
})
export class DestinationStationPage implements OnInit {

  public stations: any = [];
  public filtered_stations: any = [];
  public searchStation: string = "";
  public origin_station: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    public db: AngularFirestore
  ) {

  }

  ngOnInit() {

    this.activatedRoute.queryParamMap
      .subscribe(queryParams => {
        this.origin_station = queryParams["params"];
        console.log("Origin Station", this.origin_station);
      });

    this.db.collection("stations").get().subscribe(stations => {
      stations.forEach(station => {
        let station_data = station.data();
        station_data.line.forEach(line => {
          console.log("Line -> " + line);
        });
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

}
