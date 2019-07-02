import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from "moment";

@Component({
  selector: 'app-tickets',
  templateUrl: 'tickets.page.html',
  styleUrls: ['tickets.page.scss']
})
export class TicketsPage implements OnInit {

  public stations: any = [];
  public selected_stations: any;
  public trips: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public db: AngularFirestore,
    public alertController: AlertController
  ) {

  }

  ngOnInit() {
    this.activatedRoute.queryParamMap
      .subscribe(queryParams => {
        this.selected_stations = JSON.parse(queryParams["params"].special);
        console.log("Selected Stations", this.selected_stations);
      });
  }

  buyTicket() {
    if (window.localStorage.getItem("mbta_trips")) {
      this.trips = JSON.parse(window.localStorage.getItem("mbta_trips"));
    } else {
      this.trips = [];
    }

    let purchased_on = moment().format("LLL");

    this.selected_stations[0].purchased_on = purchased_on;

    this.trips.push(this.selected_stations[0]);

    window.localStorage.setItem("mbta_trips", JSON.stringify(this.trips));

    this.router.navigate(['ticket-purchase-complete'], { queryParams: { special: purchased_on } });
  }

  async cancelTrip() {
    const alert = await this.alertController.create({
      header: 'Cancel Trip',
      message: 'You are about to cancel your trip. Are you sure?',
      buttons: [
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancel');
          }
        }, {
          text: 'Yes',
          handler: () => {
            this.router.navigate(['home']);
          }
        }
      ]
    });
    await alert.present();
  }

}
