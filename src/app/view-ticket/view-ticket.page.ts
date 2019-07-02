import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import QRCode from "qrcode";

@Component({
  selector: 'app-view-ticket',
  templateUrl: './view-ticket.page.html',
  styleUrls: ['./view-ticket.page.scss'],
})
export class ViewTicketPage implements OnInit {

  public ticketQRCode: any;
  public trip: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    this.activatedRoute.queryParamMap
      .subscribe(queryParams => {
        this.trip = JSON.parse(queryParams["params"].special);

        console.log("Trip", this.trip.purchased_on);

        QRCode.toDataURL(this.trip.purchased_on, { errorCorrectionLevel: 'H' })
          .then(qrcode => {
            this.ticketQRCode = qrcode;
          })
          .catch(err => {
            console.error(err)
          });

      });

  }

  backHome() {
    this.router.navigate(['home']);
  }

}
