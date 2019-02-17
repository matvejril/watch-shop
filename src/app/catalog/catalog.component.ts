import { Component, OnInit } from '@angular/core';
import catalogList from '../../assets/mocks/catalog.json'
import {ICtalogCard} from "../watch-shop";

@Component({
  selector: 'el-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {
  catalogList: ICtalogCard[]
  constructor() { }
  ngOnInit() {
    this.catalogList = catalogList
  }
}
