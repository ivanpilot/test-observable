import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BondComponent } from './bond/bond.component';

import { store } from './store';
import { BondChildComponent } from './bond-child/bond-child.component';
import { BondChildBisComponent } from './bond-child-bis/bond-child-bis.component';
import { BondDirective } from './bond.directive';

@NgModule({
  declarations: [
    AppComponent,
    BondComponent,
    BondChildComponent,
    BondChildBisComponent,
    BondDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  entryComponents:[BondChildComponent, BondChildBisComponent],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(){
    let counter = 1
    setInterval(() => {
      store.updateData([{
        index: counter % 2,
        side: "buy",
        size: Math.floor(Math.random() * 10),
        price: Math.floor(Math.random() * 100),
        seller: 'Ivan',
        buyer: 'Donald'
      }])
      
      counter++
    }, 1000);
  }

}
