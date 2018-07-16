import {Observable, BehaviorSubject } from 'rxjs'
import { Bond } from './shared/model/bond';
import * as _ from 'lodash';
class DataStore {
  private _bondSubject = new BehaviorSubject([])
  public bonds$: Observable<Bond[]> = this._bondSubject.asObservable()
  
  updateData(bonds: Bond[]){
    this._bondSubject.next([...bonds])
  }

  readData(): Observable<Bond[]>{
    return this._bondSubject
  }

  // private cloneBond(){
  //   return _.cloneDeep(this._bondSubject.getValue())
  // }

}

export const store = new DataStore()