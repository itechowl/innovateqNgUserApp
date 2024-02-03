import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home' },
  { path: 'user', component: UserComponent, title: 'User' },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];
