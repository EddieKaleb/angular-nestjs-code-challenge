import { Routes } from '@angular/router';

export const homeRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'passwords',
        loadChildren: () =>
          import('../passwords/passwords.module').then(
            (m) => m.PasswordsModule
          ),
      },
    ],
  },
];
