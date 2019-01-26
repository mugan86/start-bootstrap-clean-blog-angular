import { ContactComponent } from './pages/contact/contact.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
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
const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'portfolio',
        component: PortfolioComponent
    },
    {
        path: 'not-found',
        component: NotFoundComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent },
    { path: 'portfolio', component: PortfolioComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', pathMatch: 'full' , redirectTo: 'home' },
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES, { useHash: true});
