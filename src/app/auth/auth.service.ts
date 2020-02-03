import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authenticated = false;

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
