import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { NavComponent } from './Components/header/nav/nav.component';
import { LayoutComponent } from './Layout/layout/layout.component';
import { Route, RouterModule } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { PrivacypolicyComponent } from './pages/privacypolicy/privacypolicy.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminPanelComponent } from './pages/admin-panel/admin-panel.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatTreeModule } from '@angular/material/tree';
import { ExampleComponent } from './pages/example/example.component';
import { MatTableModule } from '@angular/material/table';
import { MinTagsTableComponent } from './pages/admin-panel/main/min-tags-table/min-tags-table.component';
import { AuthorPostsTableComponent } from './pages/admin-panel/main/author-posts-table/author-posts-table.component';
import { StartComponent } from './pages/admin-panel/main/start/start.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { canactiveGuard } from './guards/canactive.guard';

const Paths: Route[] = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'blog',
        loadChildren: () => import('./pages/blog/blog/blog.module').then(m => m.BlogModule)
      },
      {
        path: 'blog-post/:id',
        loadChildren: () => import('./pages/blogpost/blogpost/blogpost.module').then(m => m.BlogpostModule)
      },
      {
        path: 'about-us',
        loadChildren: () => import('./pages/about-us/about-us.module').then(m => m.AboutUsModule)
      },
      {
        path: 'category/:id',
        loadChildren: () => import('./pages/categorypage/categorypage/categorypage.module').then(m => m.CategorypageModule)
      },
      {
        path: 'author/:id',
        loadChildren: () => import('./pages/author/author/author.module').then(m => m.AuthorModule)
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
    component: LoginComponent,
  },
  {
    path: 'admin-panel',
    component: AdminPanelComponent,
    canActivate: [canactiveGuard],
    children: [
      {
        path: '',
        component: StartComponent
      },
      {
        path: 'category-table',
        loadChildren: () => import('./pages/admin-panel/main/category-table/category-table-module/category-table-module.module').then(m => m.CategoryTableModuleModule)
      },
      {
        path: 'authors-table',
        loadChildren: () => import('./pages/admin-panel/main/authors-table/authors-table-module/authors-table-module.module').then(m => m.AuthorsTableModuleModule)
      },
      {
        path: 'read-next-table',
        loadChildren: () => import('./pages/admin-panel/main/read-next-table/read-next-table-module/read-next-table-module.module').then(m => m.ReadNextTableModuleModule)
      },
      {
        path: 'know-more-table',
        loadChildren: () => import('./pages/admin-panel/main/category-all-table/category-all-table-module/category-all-table-module.module').then(m => m.CategoryAllTableModuleModule)
      },
      {
        path: 'category-all-table',
        loadChildren: () => import('./pages/admin-panel/main/category-all-table/category-all-table-module/category-all-table-module.module').then(m => m.CategoryAllTableModuleModule)
      },
      {
        path: 'min-category-table',
        loadChildren: () => import('./pages/admin-panel/main/min-category-table/min-category-table-module/min-category-table-module.module').then(m => m.MinCategoryTableModuleModule)
      },
      {
        path: 'min-tags-table',
        loadChildren: () => import('./pages/admin-panel/main/min-tags-table/min-tags-module/min-tags-module.module').then(m => m.MinTagsModuleModule)
      },
      {
        path: 'author-posts-table',
        loadChildren: () => import('./pages/admin-panel/main/author-posts-table/author-posts-table-module/author-posts-table-module.module').then(m => m.AuthorPostsTableModuleModule)
      },
      {
        path: 'all-posts-table',
        loadChildren: () => import('./pages/admin-panel/main/all-posts-table/all-posts-table-module/all-posts-table-module.module').then(m => m.AllPostsTableModuleModule)
      }
    ]
  },
  {
    path: 'example',
    component: ExampleComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ContactComponent,
    PrivacypolicyComponent,
    LoginComponent,
    ExampleComponent,
    StartComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Paths, { scrollPositionRestoration: 'enabled' }),
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
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
