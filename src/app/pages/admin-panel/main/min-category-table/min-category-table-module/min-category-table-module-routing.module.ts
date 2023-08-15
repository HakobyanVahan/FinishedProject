import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinCategoryTableComponent } from '../min-category-table.component';

const routes: Routes = [
  {
    path: '',
    component: MinCategoryTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MinCategoryTableModuleRoutingModule { }
