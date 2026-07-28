import { DateSelectionComponent } from './date-selection/date-selection.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SuccessComponent } from './success/success.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'date-selection', component: DateSelectionComponent }
];
