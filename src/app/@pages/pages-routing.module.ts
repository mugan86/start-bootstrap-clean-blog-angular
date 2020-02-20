import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: 'blog', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
    { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule)} ,
    { path: 'post/:id', loadChildren: () => import('./post/post.module').then(m => m.PostModule)},
    { path: 'post-edit/:id', loadChildren: () => import('./post-edit/post-edit.module').then(m => m.PostEditModule)},
    { path: 'post-edit', loadChildren: () => import('./post-edit/post-edit.module').then(m => m.PostEditModule)},
    { path: 'portfolio', loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule)},
    { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule)},
    { path: 'login', loadChildren: () => import('./account/login/login.module').then(m => m.LoginModule)},
    { path: 'register', loadChildren: () => import('./account/register/register.module').then(m => m.RegisterModule)},
    { path: 'courses', loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
