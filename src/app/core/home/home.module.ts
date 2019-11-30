import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from '../home/home.component';
import { MatchesCarouselComponent } from 'src/app/features/matches-carousel/matches-carousel.component';
import { UpcomingWeekComponent } from 'src/app/features/upcoming-week/upcoming-week.component';
import { PointTableComponent } from 'src/app/features/point-table/point-table.component';
import { RecentWeekComponent } from 'src/app/features/recent-week/recent-week.component';


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
