import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Article } from './article.modal';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;
  // articles: Array<Article>;
  
  constructor() {
    this.article = new Article('', '', 0)
  }

  voteUp() {
    this.article.voteUp();
    return false;
  }

  voteDown() {
    this.article.voteDown();
    return false;
  }

  ngOnInit(): void {
  }

}
