import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorPostsTableComponent } from '../author-posts-table.component';

const routes: Routes = [
  {
    path: '',
    component: AuthorPostsTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorPostsTableModuleRoutingModule { }
