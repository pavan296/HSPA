import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

constructor() { }

authUser(user:any){
  let userArray=[];
  if(localStorage.getItem('Users')){
    userArray=JSON.parse(localStorage.getItem('Users'));
  }
  return userArray.find(p=> p.userName===user.userName && p.password=== user.password);
}

}
