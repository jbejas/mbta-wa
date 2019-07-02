import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'tickets',
    loadChildren: './tickets/tickets.module#TicketsPageModule'
  },
  { path: 'origin-station', loadChildren: './origin-station/origin-station.module#OriginStationPageModule' },
  { path: 'destination-station', loadChildren: './destination-station/destination-station.module#DestinationStationPageModule' },
  { path: 'ticket-purchase-complete', loadChildren: './ticket-purchase-complete/ticket-purchase-complete.module#TicketPurchaseCompletePageModule' },
  { path: 'view-ticket', loadChildren: './view-ticket/view-ticket.module#ViewTicketPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
