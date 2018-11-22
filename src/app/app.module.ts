import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomePageSearchComponent } from './components/home-page-search/home-page-search.component';
import { OrderStepComponent } from './components/order-step/order-step.component';
import { FeaturedDishesComponent } from './components/featured-dishes/featured-dishes.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { FooterComponent } from './components/footer/footer.component';
import { PopularComponent } from './components/popular/popular.component';
import { ModalComponent } from './components/modal/modal.component';
import { StepsComponent } from './components/steps/steps.component';
import { MealDetailComponent } from './components/meal-detail/meal-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MealsComponent } from './components/meals/meals.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { OrderReviewComponent } from './components/order-review/order-review.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomePageSearchComponent,
    OrderStepComponent,
    FeaturedDishesComponent,
    NewsletterComponent,
    FooterComponent,
    PopularComponent,
    ModalComponent,
    StepsComponent,
    MealDetailComponent,
    HomeComponent,
    MealsComponent,
    CalendarComponent,
    OrderReviewComponent,
    CheckoutComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
