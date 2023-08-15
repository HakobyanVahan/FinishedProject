import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPostsTableComponent } from '../all-posts-table.component';

const routes: Routes = [
  {
    path: '',
    component: AllPostsTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AllPostsTableModuleRoutingModule { }
