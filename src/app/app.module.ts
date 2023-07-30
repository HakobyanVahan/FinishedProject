import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { NavComponent } from './Components/header/nav/nav.component';
import { LayoutComponent } from './Layout/layout/layout.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './Components/category/category.component';
import { AuthorsComponent } from './Components/authors/authors.component';
import { AsideComponent } from './Components/aside/aside.component';
import { AllpostsComponent } from './Components/allposts/allposts.component';
import { BlogComponent } from './pages/blog/blog.component';
import { Route, RouterModule } from '@angular/router';
import { AllpostsslideComponent } from './Components/allpostsslide/allpostsslide.component';
import { BlogpostComponent } from './pages/blogpost/blogpost.component';
import { ReadnextComponent } from './Components/readnext/readnext.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { KnowMoreComponent } from './Components/know-more/know-more.component';
import { CategorypageComponent } from './pages/categorypage/categorypage.component';
import { MinCategoryComponent } from './Components/min-category/min-category.component';
import { MinTagsComponent } from './Components/min-tags/min-tags.component';
import { AuthorComponent } from './pages/author/author.component';
import { OneAuthorsComponent } from './Components/one-authors/one-authors.component';
import { MypostscomComponent } from './Components/mypostscom/mypostscom.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PrivacypolicyComponent } from './pages/privacypolicy/privacypolicy.component';
import { CategoryAllPostsComponent } from './Components/category-all-posts/category-all-posts.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTreeModule} from '@angular/material/tree';
import { MainComponent } from './pages/admin-panel/main/main.component';
import { CategoryTableComponent } from './pages/admin-panel/main/category-table/category-table.component';
import { ExampleComponent } from './pages/example/example.component';
import {MatTableModule} from '@angular/material/table';
import { AuthorsTableComponent } from './pages/admin-panel/main/authors-table/authors-table.component';
import { ReadNextTableComponent } from './pages/admin-panel/main/read-next-table/read-next-table.component';
import { KnowMoreTableComponent } from './pages/admin-panel/main/know-more-table/know-more-table.component';
import { CategoryAllTableComponent } from './pages/admin-panel/main/category-all-table/category-all-table.component';
import { MinCategoryTableComponent } from './pages/admin-panel/main/min-category-table/min-category-table.component';
import { MinTagsTableComponent } from './pages/admin-panel/main/min-tags-table/min-tags-table.component';
import { AuthorPostsTableComponent } from './pages/admin-panel/main/author-posts-table/author-posts-table.component';
import { AllPostsTableComponent } from './pages/admin-panel/main/all-posts-table/all-posts-table.component';


const Paths: Route[] = [
  {
    path: 'layout',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'blog',
        component: BlogComponent
      },
      {
        path: 'blog-post/:id',
        component: BlogpostComponent,
      },
      {
        path: 'about-us',
        component: AboutUsComponent
      },
      {
        path: 'category/:id',
        component: CategorypageComponent
      },
      {
        path: 'author/:id',
        component: AuthorComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'privacy-policy',
        component: PrivacypolicyComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'admin-panel',
    component: AdminPanelComponent,
    children:[
      {
        path: 'category-table',
        component: CategoryTableComponent
      },
      {
        path: 'authors-table',
        component: AuthorsTableComponent
      },
      {
        path: 'read-next-table',
        component: ReadNextTableComponent
      },
      {
        path: 'know-more-table',
        component: KnowMoreTableComponent
      },
      {
        path: 'category-all-table',
        component: CategoryAllTableComponent
      },
      {
        path: 'min-category-table',
        component: MinCategoryTableComponent
      },
      {
        path: 'min-tags-table',
        component: MinTagsTableComponent
      },
      {
        path: 'author-posts-table',
        component: AuthorPostsTableComponent
      },
      {
        path: 'all-posts-table',
        component: AllPostsTableComponent
      }
    ]
  },
  {
    path: 'example',
    component: ExampleComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    LayoutComponent,
    FooterComponent,
    HomeComponent,
    CategoryComponent,
    AuthorsComponent,
    AsideComponent,
    AllpostsComponent,
    BlogComponent,
    AllpostsslideComponent,
    BlogpostComponent,
    ReadnextComponent,
    AboutUsComponent,
    KnowMoreComponent,
    CategorypageComponent,
    MinCategoryComponent,
    MinTagsComponent,
    AuthorComponent,
    OneAuthorsComponent,
    MypostscomComponent,
    ContactComponent,
    PrivacypolicyComponent,
    CategoryAllPostsComponent,
    AdminPanelComponent,
    LoginComponent,
    MainComponent,
    CategoryTableComponent,
    ExampleComponent,
    AuthorsTableComponent,
    ReadNextTableComponent,
    KnowMoreTableComponent,
    CategoryAllTableComponent,
    MinCategoryTableComponent,
    MinTagsTableComponent,
    AuthorPostsTableComponent,
    AllPostsTableComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Paths),
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule, 
    MatButtonModule, 
    MatIconModule,
    MatDividerModule,
    MatSidenavModule,
    MatSelectModule,
    MatTreeModule, 
    MatButtonModule,
    MatIconModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
