import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BondChildComponent } from './bond-child.component';

describe('BondChildComponent', () => {
  let component: BondChildComponent;
  let fixture: ComponentFixture<BondChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BondChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BondChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
