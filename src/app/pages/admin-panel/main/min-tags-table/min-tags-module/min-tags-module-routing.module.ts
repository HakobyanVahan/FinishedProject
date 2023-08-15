import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MinTagsTableComponent } from '../min-tags-table.component';

const routes: Routes = [
  {
    path: '',
    component: MinTagsTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MinTagsModuleRoutingModule { }
