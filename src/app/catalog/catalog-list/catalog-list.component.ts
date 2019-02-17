import { Component, OnInit, Input } from '@angular/core';
import {ICtalogCard} from "../../watch-shop";

@Component({
  selector: 'el-catalog-list',
  templateUrl: 'catalog-list.component.html',
  styleUrls: ['catalog-list.component.scss']
})
export class CatalogListComponent implements OnInit {
  @Input() catalogList: ICtalogCard
  constructor() { }
  ngOnInit() {
  }
}
