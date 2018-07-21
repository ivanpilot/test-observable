import { Component, OnInit, Input } from '@angular/core';
import { Bond } from '../shared/model/bond';
import { Observable } from 'rxjs';
import { store } from '../store';

@Component({
  selector: 'bond-child',
  templateUrl: './bond-child.component.html',
  styleUrls: ['./bond-child.component.css']
})

export class BondChildComponent implements OnInit {
  // @Input() bonds: Bond[]
  bonds$: Observable<Bond[]>

  constructor() { }

  ngOnInit() {
    store.bonds$.subscribe(() => {
      this.bonds$ = store.readData()
      console.log('from 1 >>', this.bonds$)
    })
  }

}
