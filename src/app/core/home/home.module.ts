import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from '../home/home.component';
import { MatchesCarouselComponent } from '../matches/matches-carousel/matches-carousel.component';
import { UpcomingWeekComponent } from '../matches/upcoming-week/upcoming-week.component';
import { PointTableComponent } from '../stats/point-table/point-table.component';
import { RecentWeekComponent } from '../matches/recent-week/recent-week.component';




@NgModule({
  declarations: [
    HomeComponent ,
    MatchesCarouselComponent,
     UpcomingWeekComponent,
     PointTableComponent,
     RecentWeekComponent
    ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
