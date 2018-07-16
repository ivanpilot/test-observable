import { Component, OnInit } from '@angular/core';
import { Observer, Observable } from 'rxjs';
import { Bond } from '../shared/model/bond';
import { store } from '../store';

@Component({
  selector: 'bond',
  templateUrl: './bond.component.html',
  styleUrls: ['./bond.component.css']
})
export class BondComponent implements OnInit, Observer<Bond> {
  bonds$: Observable<Bond[]>
  // bonds: Bond[]

  constructor() { }

  ngOnInit() {
    store.bonds$.subscribe(this)
  }

  next = (data) => {
    // console.log(data)
    // this.bonds = [...data]
    this.reader()
  }

  error(err){
    console.log(err)
  }

  complete(){
    console.log('The observable has completed')
  }

  reader() {
    this.bonds$ = store.readData()
  }
  // reader(): Observable<Bond[]> {
  //   return store.readData()
  // }

}
