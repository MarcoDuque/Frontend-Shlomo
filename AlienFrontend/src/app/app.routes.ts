import { Routes } from '@angular/router';
import { CustomersComponent } from './screens/customers/customers.component';
import { CoursesComponent } from './screens/courses/courses.component';
import { BillsComponent } from './screens/bills/bills.component';

export const routes: Routes = [
    {'path': 'customers', component: CustomersComponent },
    {'path': 'courses', component: CoursesComponent },
    {'path': 'bills', component: BillsComponent }
];
