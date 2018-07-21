import { Component, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy, ComponentRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Bond } from '../shared/model/bond';
import { store } from '../store';
import { BondDirective } from '../bond.directive';
import { BondChildComponent } from '../bond-child/bond-child.component';
import { BondChildBisComponent } from '../bond-child-bis/bond-child-bis.component';


@Component({
  selector: 'bond',
  templateUrl: './bond.component.html',
  styleUrls: ['./bond.component.css']
})

export class BondComponent implements OnInit, OnDestroy {
  @ViewChild(BondDirective) bondDirective: BondDirective

  bonds$: Observable<Bond[]>
  componentRef: ComponentRef<any>
  index: number

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {

    store.bonds$.subscribe((data) => {
      console.log('>> DATA: ', data)
      if(data && data[0]){
        data[0].index === 0 ? this.index = 2 : this.index = 1
      }
      if(this.index){
        this.loadBondComponent()
      }
    })
  }

  loadBondComponent(){
    let mapping = {
      1: BondChildComponent,
      2: BondChildBisComponent
    }

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(mapping[this.index])
    let viewContainerRef = this.bondDirective.viewContainerRef
    viewContainerRef.clear()

    this.componentRef = viewContainerRef.createComponent(componentFactory)
  }

  ngOnDestroy(){
    this.componentRef.destroy()
  }
}
