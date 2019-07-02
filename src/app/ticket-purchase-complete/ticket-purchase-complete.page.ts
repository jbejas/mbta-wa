import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import QRCode from "qrcode";

@Component({
  selector: 'app-ticket-purchase-complete',
  templateUrl: './ticket-purchase-complete.page.html',
  styleUrls: ['./ticket-purchase-complete.page.scss'],
})
export class TicketPurchaseCompletePage implements OnInit {

  public canvas: any;
  public ticketQRCode: any;
  public purchased_on: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {

    // Get params passed to this view. Selected Ticket from Home View.
    this.activatedRoute.queryParamMap
      .subscribe(queryParams => {
        this.purchased_on = queryParams["params"].special;

        console.log("Purchased On", this.purchased_on);

        // Generate QRCode using purchased_on value.
        QRCode.toDataURL(this.purchased_on, { errorCorrectionLevel: 'H' })
          .then(qrcode => {
            this.ticketQRCode = qrcode;
          })
          .catch(err => {
            console.error(err)
          });

      });

  }

  // This method speaks for itself.
  backHome() {
    this.router.navigate(['home']);
  }

}
