import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'el-catalog-details',
  templateUrl: 'catalog-details.component.html',
  styleUrls: ['catalog-details.component.scss']
})
export class CatalogDetailsComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.activatedRoute.params.subscribe(params=> {
        console.log(params)
      }
    )
  }
}
