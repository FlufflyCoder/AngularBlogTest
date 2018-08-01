import { NgModule } from '@angular/core';
import { ArticlesComponent } from './articles/articles.component';
import { CreatearticleComponent } from './createarticle/createarticle.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ArticledetailComponent } from './articledetail/articledetail.component';

const routes: Routes = [
  { path: 'articleslist', component: ArticlesComponent },
  { path: 'createarticle', component: CreatearticleComponent},
  { path: ':id', component: ArticledetailComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ArticlesComponent, CreatearticleComponent, ArticledetailComponent],
  exports: [
      RouterModule
  ]
})
export class ArticlesModule { }
