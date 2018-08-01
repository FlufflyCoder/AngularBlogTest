import { Component, OnInit } from '@angular/core';
import { IArticle } from '../article';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-articledetail',
  templateUrl: './articledetail.component.html',
  styleUrls: ['./articledetail.component.scss']
})
export class ArticledetailComponent implements OnInit {
  article: IArticle;
  errorMessage = '';
  constructor(private route: ActivatedRoute, private router: Router, private articleService: ArticlesService) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('id');
    if(param){
      const id = +param;
      this.getArticle(id);
    }
  }

  getArticle(id: number) {
    this.articleService.getArticle(id).subscribe(
      article => this.article = article,
      error => this.errorMessage = <any>error);
  }

}
