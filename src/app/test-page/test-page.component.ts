import { Component, OnInit } from '@angular/core';
import {of, timer, from, merge, combineLatest} from 'rxjs'
import {map, toArray, concatMap, mergeMap, take, mergeAll, switchAll, concatAll, delay} from 'rxjs/operators'

@Component({
  selector: 'app-test-page',
  templateUrl: './test-page.component.html',
  styleUrls: ['./test-page.component.scss']
})
export class TestPageComponent implements OnInit {
  constructor() { }
  ngOnInit() {
    let sb1 = of(1, 2, 3, 4)
    let sb2 = of('a', 'b', 'c', 'd')
    // let sb1 = timer(0, 1500).pipe(take(4))
    // let sb2 = timer(800, 1000).pipe(take(6), map(r => {
    //   return 'abbbsara'[r]
    // }))
    // mergeAll(sb1, sb2).subscribe(r => {
    //   console.log(r)
    // })
    // sb1.pipe(map(r=>{
    //   console.log('r1', r)
    //   return r
    // }))
    //   .subscribe(res => {
    //     console.log('res', res)
    //   })
    // merge(sb1, sb2).subscribe(r=>{
    //   console.log(of(r))
    // })
    // sb1.pipe(map( e => {
    //   return of(e)
    // }), mergeAll()).subscribe(r=> {
    //   console.log(r)
    // })
    // sb1.pipe(mergeMap(r => {
    //   console.log('rr', r)
    //   return sb2
    // })).subscribe(r=>{
    //   console.log(r)
    // })
    // combineLatest(sb1, sb2).subscribe(res=>{
    //   console.log(res)
    // })

    const getData = (param) => {
      return of(`retrieved new data with param ${param}`).pipe(
        delay(1000)
      )
    }

    from([1,2,3,4]).pipe(
      map(param => getData(param)), concatAll()
    ).subscribe(data => console.log(data));

  }
}
