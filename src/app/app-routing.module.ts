import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/others/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'verdict',
    loadChildren: () =>
      import('./pages/verdictpage/verdictpage.module').then(
        (m) => m.VerdictpageModule
      ),
  },
  {
    path: 'switcher',
    loadChildren: () =>
      import('./pages/switcherpage/switcherpage.module').then(
        (m) => m.SwitcherpageModule
      ),
  },
  {
    path: 'ipo_home',
    loadChildren: () =>
      import('./pages/ipopage/ipopage.module').then((m) => m.IPOpageModule),
  },
  {
    path: 'portfolio-plus',
    loadChildren: () =>
      import('./pages/personal-portfolios/personal-portfolios.module').then(
        (m) => m.PersonalPortfoliosModule
      ),
  },
  {
    path: '**',
    component: NotFoundComponent // Use component directly
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
