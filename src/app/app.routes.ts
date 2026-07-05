import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component').then((m) => m.HomeComponent),
    title: 'Mina Magdy Shoukry — Frontend Developer',
  },
  {
    path: 'projects/:slug',
    loadComponent: () =>
      import('./pages/project-details/project-details.component').then(
        (m) => m.ProjectDetailsComponent
      ),
    title: 'Project Details — Mina Magdy',
  },
  { path: '**', redirectTo: '' },
];
