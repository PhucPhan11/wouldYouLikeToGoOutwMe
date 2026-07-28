import { Routes } from '@angular/router';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { DateSelectionComponent } from './date-selection/date-selection.component';
import { HomeComponent } from './home/home.component';
import { SuccessComponent } from './success/success.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'date-selection', component: DateSelectionComponent },
  { path: 'confirmation', component: ConfirmationComponent }
];
