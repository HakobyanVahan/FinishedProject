import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { TextcomComponent } from './Components/textcom/textcom.component';

const Paths:Route[] = [
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
        path: 'blog-post',
        component: BlogpostComponent,
      },
      {
        path: 'about-us',
        component: AboutUsComponent
      },
      {
        path: 'category',
        component: CategorypageComponent
      },
      {
        path: 'author',
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
    TextcomComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Paths)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
