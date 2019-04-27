import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
/**
 * {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'about',
    loadChildren: './about/about.module#AboutModule'
  },
 */

const APP_ROUTES: Routes = [
    // { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent },
    // { path: 'post', component: PostComponent },
    { path: 'portfolio', component: PortfolioComponent },
    // { path: 'contact', component: ContactComponent },
    { path: '**', pathMatch: 'full' , redirectTo: 'portfolio' },
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES, { useHash: true});
