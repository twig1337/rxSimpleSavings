import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  private drugId: number;

  constructor(private route: ActivatedRoute) {
    this.drugId = +this.route.snapshot.paramMap.get('id');
  }
}
