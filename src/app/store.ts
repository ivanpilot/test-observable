import {Observable, BehaviorSubject } from 'rxjs'
import { Bond } from './shared/model/bond';

class DataStore {
  private bondSubject = new BehaviorSubject([])
  public bonds$: Observable<Bond[]> = this.bondSubject.asObservable()
  
  updateData(bonds: Bond[]){
    this.bondSubject.next([...bonds])
  }

  readData(): Observable<Bond[]>{
    return this.bondSubject
  }

}

export const store = new DataStore()