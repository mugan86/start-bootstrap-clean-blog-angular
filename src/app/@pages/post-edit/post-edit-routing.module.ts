import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostEditComponent } from './post-edit.component';

const routes: Routes = [
  {
    path: '',
    component: PostEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostEditRoutingModule { }
