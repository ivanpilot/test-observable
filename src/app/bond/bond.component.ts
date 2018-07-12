import { Component, OnInit } from '@angular/core';
import { Observer, Observable } from 'rxjs';
import { Bond } from '../shared/model/bond';
import { store } from '../store';

@Component({
  selector: 'bond',
  templateUrl: './bond.component.html',
  styleUrls: ['./bond.component.css']
})
// export class BondComponent implements OnInit, Observer<Bond> {
export class BondComponent implements OnInit {
  bonds$: Observable<Bond[]>
  // bonds: Bond[]

  constructor() { }

  ngOnInit() {
    // store.bonds$.subscribe(this)
    this.bonds$ = store.bonds$
  }

  // next(data: any){
  //   console.log(data)
  //   this.bonds = data[0]
  // }

  // error(err){
  //   console.log(err)
  // }

  // complete(){
  //   console.log('The observable has completed')
  // }

}
