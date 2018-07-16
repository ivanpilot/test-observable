import { Component, OnInit, Input } from '@angular/core';
import { Bond } from '../shared/model/bond';

@Component({
  selector: 'bond-child',
  templateUrl: './bond-child.component.html',
  styleUrls: ['./bond-child.component.css']
})

export class BondChildComponent implements OnInit {
  @Input() bonds: Bond[]
  constructor() { }

  ngOnInit() {
  }

}
