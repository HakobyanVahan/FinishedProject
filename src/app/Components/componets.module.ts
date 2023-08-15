import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMissionComponent } from './about-mission/about-mission.component';
import { KnowMoreComponent } from './know-more/know-more.component';
import { AsideComponent } from './aside/aside.component';
import { AuthorsComponent } from './authors/authors.component';
import { AllpostsComponent } from './allposts/allposts.component';
import { CategoryComponent } from './category/category.component';
import { AllpostsslideComponent } from './allpostsslide/allpostsslide.component';
import { MinCategoryComponent } from './min-category/min-category.component';
import { MinTagsComponent } from './min-tags/min-tags.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MypostscomComponent } from './mypostscom/mypostscom.component';
import { MainComponent } from '../pages/admin-panel/main/main.component';
import { AllPostsTableComponent } from '../pages/admin-panel/main/all-posts-table/all-posts-table.component';
import { CategoryTableComponent } from '../pages/admin-panel/main/category-table/category-table.component';
import { AuthorsTableComponent } from '../pages/admin-panel/main/authors-table/authors-table.component';
import { ReadNextTableComponent } from '../pages/admin-panel/main/read-next-table/read-next-table.component';
import { KnowMoreTableComponent } from '../pages/admin-panel/main/know-more-table/know-more-table.component';
import { CategoryAllTableComponent } from '../pages/admin-panel/main/category-all-table/category-all-table.component';
import { MinCategoryTableComponent } from '../pages/admin-panel/main/min-category-table/min-category-table.component';
import { MinTagsTableComponent } from '../pages/admin-panel/main/min-tags-table/min-tags-table.component';
import { AuthorPostsTableComponent } from '../pages/admin-panel/main/author-posts-table/author-posts-table.component';



@NgModule({
  declarations: [
    AboutMissionComponent,
    KnowMoreComponent,
    AsideComponent,
    AuthorsComponent,
    AllpostsComponent,
    CategoryComponent,
    AllpostsslideComponent,
    MinCategoryComponent,
    MinTagsComponent,
    HeaderComponent,
    FooterComponent,
    MypostscomComponent,
    MainComponent,
    AllPostsTableComponent,
    CategoryTableComponent,
    AuthorsTableComponent,
    ReadNextTableComponent,
    KnowMoreTableComponent,
    CategoryAllTableComponent,
    MinCategoryTableComponent,
    MinTagsTableComponent,
    AuthorPostsTableComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class ComponetsModule {

}
