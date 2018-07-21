import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BondChildBisComponent } from './bond-child-bis.component';

describe('BondChildBisComponent', () => {
  let component: BondChildBisComponent;
  let fixture: ComponentFixture<BondChildBisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BondChildBisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BondChildBisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
