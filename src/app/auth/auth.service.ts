import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authenticated = true;

  constructor() { }

  get userIsAuthenticated(){
    return this.authenticated;
  }

  login(email: string, password: string){
    this.authenticated = true;
  }

  logout(){
    this.authenticated = false;
  }
  
  
}
