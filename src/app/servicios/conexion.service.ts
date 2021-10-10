import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from 'app/interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  heroesUrl ='http://coinbank.ddns.net:8045/'
  id ='token'
  

  constructor(private http: HttpClient) { }

  authpost(user:Auth){
    return this.http.post<Auth>(this.heroesUrl + this.id,user)
  }

  loggedin(){
    return !!localStorage.getItem('token');
    
    
  }

  getToken(){
    return localStorage.getItem('token');
  }
 


}
