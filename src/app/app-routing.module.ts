import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { MealDetailComponent } from "./components/meal-detail/meal-detail.component";
import { HomeComponent } from './components/home/home.component';
import { MealsComponent } from './components/meals/meals.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { OrderReviewComponent } from './components/order-review/order-review.component';



const routes: Routes = [
  { path: '', component:HomeComponent},
  { path: 'meals', component: MealsComponent },
  { path: 'meal-detail', component: MealDetailComponent },
  { path: 'calendar', component: CalendarComponent },
  { path:'home',component:HomeComponent},
  { path:'order/checkout', component:CheckoutComponent},
  { path:'order/review', component:OrderReviewComponent},
  { path: 'order/login', component: LoginComponent},
  { path: 'order/register', component:RegisterComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
