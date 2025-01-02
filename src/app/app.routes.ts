import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PlanComponent } from './plan/plan.component';
import { ItineraryComponent } from './itinerary/itinerary.component'; // Add if it exists
import { BudgetComponent } from './budget/budget.component'; 
import { NotfoundComponent } from './notfound/notfound.component';

export const routes: Routes = [
  
  { path: 'home', component: HomeComponent },
  { path: 'plan', component: PlanComponent },
  { path: 'itinerary', component: ItineraryComponent },
  { path: 'budget', component: BudgetComponent },
  { path: '**',component: NotfoundComponent } 
];
