import { Routes } from '@angular/router';
import {TheHomeContentComponent} from "./public/components/the-home-content/the-home-content.component";
import {MentalStateExamsComponent} from "./HIGN/components/mental-state-exams/mental-state-exams.component";
import {PageNotFoundComponent} from "./public/components/page-not-found/page-not-found.component";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: TheHomeContentComponent },
  { path: 'nursing/mental-state-exams', component: MentalStateExamsComponent },
  { path: '**', component: PageNotFoundComponent },
];
