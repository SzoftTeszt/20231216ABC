import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } 
  from '@angular/fire/compat/database';
import { Message } from '../message';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  messages:AngularFireList<Message>
  url="https://zsemlyabc-default-rtdb.europe-west1.firebasedatabase.app/aruk"

  productsSub = new BehaviorSubject<any>([])

  constructor(private db:AngularFireDatabase, 
      private http:HttpClient) { 
    this.messages= this.db.list('messages')
    this.loadProducts()
  }

  getProducts(){
    return this.productsSub
  }

  loadProducts(){
    this.http.get(this.url+".json").subscribe(
      (res)=> this.productsSub.next(res)
    )
  }




  addMessage(body:any){
    body={}
    body.content="Próba üzenet"
    body.email="jagerattila@gmail.com"
    return this.messages.push(body)
  }

  getMessages(){
    return this.messages
  }
}
