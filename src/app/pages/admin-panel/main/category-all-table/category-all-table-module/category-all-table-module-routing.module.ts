import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryAllTableComponent } from '../category-all-table.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryAllTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryAllTableModuleRoutingModule { }
