import { Routes } from '@angular/router';
import { DepartmentDetailComponent } from '../department-detail/department-detail.component';
import { PaymentDetailsComponent } from '../payment-details/payment-details.component';


export const appRoutes: Routes = [
  { path: 'department', component: DepartmentDetailComponent },
  { path: 'paymentDetail', component: PaymentDetailsComponent }
]
