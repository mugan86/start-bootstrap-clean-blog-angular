import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoTitleMetaTagsAngularService {

  constructor(private titleService: Title, private meta: Meta) { }

  setTitlePage(pageName: string, title: string) {
    // SEO
    this.titleService.setTitle('Anartz Mugika Ledo - '.concat(title));
  }

  setMetaTags(keywords: string, description: string, author: string, robots: string = 'index, follow') {
    this.meta.addTags([
      { name: 'keywords', content: keywords },
      { name: 'description', content: description },
      { name: 'author', content: author },
      { name: 'robots', content: robots }
    ]);
  }
}
