import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Navigation Component
import { NavbarComponent } from './components/navbar/navbar.component';

// Footer Component
import { FooterComponent } from './components/footer/footer.component';

// Home Component
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  NavbarComponent,
  HomeComponent,
  FooterComponent
];
