import { Component, OnInit } from '@angular/core';
import { LinkService } from '../link.service';

@Component({
  selector: 'app-link-retrieval',
  templateUrl: './link-retrieval.component.html',
})
export class LinkRetrievalComponent implements OnInit {
  shortLinks: any[];

  constructor(private linkService: LinkService) {}

  ngOnInit() {
    this.linkService.getShortLinks().subscribe((links) => {
      this.shortLinks = links;
    });
  }
}
