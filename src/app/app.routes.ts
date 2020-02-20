import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const APP_ROUTES: Routes = [
    { path: 'admin', loadChildren: () => import('./@admin/general/general.module').then(m => m.GeneralModule)},
    { path: 'admin/posts', loadChildren: () => import('./@admin/posts/posts.module').then(m => m.PostsModule)},
    { path: '**', pathMatch: 'full' , redirectTo: 'blog' },
];

export const AppRoutingModule: ModuleWithProviders =
    RouterModule.forRoot(APP_ROUTES, { useHash: true, scrollPositionRestoration: 'enabled'});
