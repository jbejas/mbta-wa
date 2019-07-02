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
  public destination_station: any;
  public loading: boolean = true;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public db: AngularFirestore
  ) {

  }

  ngOnInit() {

    // Get Origin Station data.
    this.activatedRoute.queryParamMap
      .subscribe(queryParams => {
        this.origin_station = queryParams["params"];

        // Loop over all lines on station.
        this.origin_station.line.forEach(origin_station_line => {

          // Query Firebase for all stations that have the origin station lines.
          this.db.collection("stations", ref =>
            ref.where("line", "array-contains", origin_station_line)
          ).get().subscribe(stations => {

            // If the station has any of the Lines, loop.
            if (stations.size) {
              stations.forEach(station => {

                // Setup station data.
                let station_data = station.data();

                // Find is the selected station exists in object. If not, add it. If is the same as the origin station, exclude.
                if (!this.stations.find(s => s.route == station_data.route) && station_data.route != this.origin_station.route) {
                  // Populate Stations main object.
                  this.stations.push({
                    route: station_data.route,
                    line: station_data.line
                  });

                  // Populate Dummy stations object.
                  this.filtered_stations.push({
                    route: station_data.route,
                    line: station_data.line
                  });
                }

              });
            }
            // Hide Loading. Needs further correction.
            this.loading = false;
          });
        });
      });
  }

  // Filter stations.
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

  // Set origin and destination stations and navigate to Tickets View.
  setDestinationStation(destination_station) {
    let selected_stations = [];
    selected_stations.push({
      origin_station: this.origin_station,
      destination_station: destination_station
    });

    //console.log("Selected Stations", selected_stations);

    this.router.navigate(['tickets'], {
      queryParams: {
        special: JSON.stringify(selected_stations)
      }
    });
  }

}
