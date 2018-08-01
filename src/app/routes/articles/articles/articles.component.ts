import { Component, OnInit } from '@angular/core';
//import { ArticlesService } from '../articles.service';
import { IArticle } from '../article';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articles: IArticle[] = [];
  errorMessage: string;
  constructor(private articleService : ArticlesService) { }

  ngOnInit() :void{
    this.articleService.getArticles().subscribe(
      articles => {
        this.articles = articles;
      },
      error => this.errorMessage = <any>error
    );
  }

}
