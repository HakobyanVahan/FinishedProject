import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KnowMoreTableComponent } from '../know-more-table.component';

const routes: Routes = [
  {
    path: '',
    component: KnowMoreTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KnowMoreTableModuleRoutingModule { }
