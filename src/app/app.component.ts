import { Component } from '@angular/core';
import { Article } from './article/article.modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  articles: Article[];
  constructor() {
    this.articles = [
      new Article('Angular', 'http://angular.io', 3),
      new Article('Fullstack', 'http://fulstack.io', 2),
      new Article('Angular Homepage', 'htttp://angular.io', 1),
    ]

  }

  addArticle(newtitle: HTMLInputElement, newlink: HTMLInputElement): boolean {
    console.log(`Article ${newtitle.value} added and its link is ${newlink.value}` );
    this.articles.push(new Article(newtitle.value, newlink.value, 0));
    newtitle.value = '';
    newlink.value = '';
    return false;
  }

  sortedArticle() {
    return this.articles.sort((a1: Article, a2: Article) => a2.votes - a1.votes);
  }
}
