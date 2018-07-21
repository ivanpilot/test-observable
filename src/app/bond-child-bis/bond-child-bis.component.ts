import { Component, OnInit, Input } from '@angular/core';
import { Bond } from '../shared/model/bond';
import { Observable } from 'rxjs';
import { store } from '../store';

@Component({
  selector: 'bond-child-bis',
  templateUrl: './bond-child-bis.component.html',
  styleUrls: ['./bond-child-bis.component.css']
})
export class BondChildBisComponent implements OnInit {
  // @Input() bonds: Bond[]
  bonds$: Observable<Bond[]>

  constructor() { }

  ngOnInit() {
    store.bonds$.subscribe(() => {
      this.bonds$ = store.readData()
      console.log('from 2 >>', this.bonds$)
    })
  }

}
