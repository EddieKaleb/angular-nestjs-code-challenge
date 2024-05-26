import { Routes } from '@angular/router';
import { HomeComponent } from '../home/pages/home/home.component';
import { PasswordsListComponent } from './pages/passwords-list/passwords-list.component';

export const passwordsRoutes: Routes = [
  {
    path: '',
    redirectTo: 'passwords',
    pathMatch: 'full',
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'passwords',
        component: PasswordsListComponent,
      },
    ],
  },
];
