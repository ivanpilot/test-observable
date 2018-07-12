import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BondComponent } from './bond/bond.component';

import { store } from './store';

@NgModule({
  declarations: [
    AppComponent,
    BondComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(){
    setTimeout(() => {
      store.updateData([{
        side: "buy",
        size: Math.floor(Math.random() * 10),
        price: Math.floor(Math.random() * 100),
        seller: 'Ivan',
        buyer: 'Donald'
      }])
    }, 3000);
  }

}
