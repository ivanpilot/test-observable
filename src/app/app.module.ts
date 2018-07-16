import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BondComponent } from './bond/bond.component';

import { store } from './store';
import { BondChildComponent } from './bond-child/bond-child.component';

@NgModule({
  declarations: [
    AppComponent,
    BondComponent,
    BondChildComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(){
    setInterval(() => {
      store.updateData([{
        side: "buy",
        size: Math.floor(Math.random() * 10),
        price: Math.floor(Math.random() * 100),
        seller: 'Ivan',
        buyer: 'Donald'
      }])
    }, 1000);
  }

}
