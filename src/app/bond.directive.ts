import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[bond]'
})
export class BondDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
