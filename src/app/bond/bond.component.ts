import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Bond } from '../shared/model/bond';
import { store } from '../store';

@Component({
  selector: 'bond',
  templateUrl: './bond.component.html',
  styleUrls: ['./bond.component.css']
})

export class BondComponent implements OnInit {
  bonds$: Observable<Bond[]>

  constructor() { }

  ngOnInit() {
    store.bonds$.subscribe(() => {
      this.bonds$ = store.readData()
      console.log(this.bonds$)
    })
  }
}
