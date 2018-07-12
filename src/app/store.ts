import {Observable, BehaviorSubject } from 'rxjs'
import { Bond } from './shared/model/bond';

class DataStore {
  private bonds: Bond[] = []
  private bondSubject = new BehaviorSubject([])
  public bonds$: Observable<Bond[]> = this.bondSubject.asObservable()
  
  updateData(bonds: Bond[]){
    this.bonds = [...bonds]
    this.bondSubject.next([...bonds])
  }

}

export const store = new DataStore()