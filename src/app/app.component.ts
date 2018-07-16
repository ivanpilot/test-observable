import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Bond } from './shared/model/bond';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public bondsList$: Observable<Bond[]>
  public bondsList: Bond[]
  
  ngOnInit(){
    this.bondsList$ = Observable.create(observer => {
      setInterval(() => {
        observer.next([{
          side: "buy",
          size: Math.floor(Math.random() * 10),
          price: Math.floor(Math.random() * 100),
          seller: 'Ivan',
          buyer: 'Donald'
        }])
      }, 3000)
    })

    // this.bondsList$.subscribe( data => {
    //   console.log(data)
    //   this.bondsList = data
    // })
  }


}
