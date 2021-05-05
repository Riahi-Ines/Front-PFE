import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseURL="https://itbs-backend.herokuapp.com";
  private loginUserUrl=this.baseURL+"/user/login"


  constructor(private http:HttpClient) { }
  LogIn(dataFormLoginForm){
    console.log(dataFormLoginForm);
    let dataFormaAPI = this.http.post<any>(this.loginUserUrl, dataFormLoginForm)
    return dataFormaAPI
  }

  isLoggedAdmin(){
    let token= localStorage.getItem("mytoken");
    if(!token){
      return false
    }
    else {
      const helper= new JwtHelperService();
      const decodertoken =helper.decodeToken(token);
      if (decodertoken.role=="admin") {
        return true;
      } else {
        return false;
      }

    }
  }

  isLoggedUser(){
    let token= localStorage.getItem("mytoken");
    if(!token){
      return false
    }
    else {
      const helper= new JwtHelperService();
      const decodertoken =helper.decodeToken(token);
      if (decodertoken.role=="user") {
        return true;
      } else {
        return false;
      }

    }
  }
  isLogged(){
    let token= localStorage.getItem("mytoken");
    if(!token){
      return false
    }
    else {
      return true

    }
  }
}
