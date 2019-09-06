import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const APP_ROUTES: Routes = [
    { path: 'blog', loadChildren: () => import('./@pages/home/home.module').then(m => m.HomeModule)},
    { path: 'about', loadChildren: () => import('./@pages/about/about.module').then(m => m.AboutModule)} ,
    { path: 'post/:id', loadChildren: () => import('./@pages/post/post.module').then(m => m.PostModule)},
    { path: 'post-edit/:id', loadChildren: () => import('./@pages/post-edit/post-edit.module').then(m => m.PostEditModule)},
    { path: 'post-edit', loadChildren: () => import('./@pages/post-edit/post-edit.module').then(m => m.PostEditModule)},
    { path: 'portfolio', loadChildren: () => import('./@pages/portfolio/portfolio.module').then(m => m.PortfolioModule)},
    { path: 'contact', loadChildren: () => import('./@pages/contact/contact.module').then(m => m.ContactModule)},
    { path: 'login', loadChildren: () => import('./@pages/account/login/login.module').then(m => m.LoginModule)},
    { path: 'register', loadChildren: () => import('./@pages/account/register/register.module').then(m => m.RegisterModule)},
    { path: 'courses', loadChildren: () => import('./@pages/courses/courses.module').then(m => m.CoursesModule)},
    { path: 'admin', loadChildren: () => import('./@admin/general/general.module').then(m => m.GeneralModule)},
    { path: 'admin/posts', loadChildren: () => import('./@admin/posts/posts.module').then(m => m.PostsModule)},
    { path: '**', pathMatch: 'full' , redirectTo: 'blog' },
];

export const AppRoutingModule: ModuleWithProviders =
    RouterModule.forRoot(APP_ROUTES, { useHash: true, scrollPositionRestoration: 'enabled'});
