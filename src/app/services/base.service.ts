import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } 
  from '@angular/fire/compat/database';
import { Message } from '../message';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  messages:AngularFireList<Message>
  
  constructor(private db:AngularFireDatabase) { 
    this.messages= this.db.list('messages')
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
