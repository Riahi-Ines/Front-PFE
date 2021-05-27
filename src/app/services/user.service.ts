import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";
@Injectable({
  providedIn: 'root'
})
export class UserService {
 baseURL:string = "http://localhost:3000";
  private singupUserUrl = this.baseURL + "/user/signup"
  private allusersUrl = this.baseURL + "/user/all"
  private oneuserUrl = this.baseURL + "/user/one/"
  private deleteUrl = this.baseURL + "/user/remove/"
  private updateUrl = this.baseURL + "/user/update/"
  private singinUserUrl = this.baseURL + "/user/signin"


  constructor(private http: HttpClient) { } 
  SignUp(dataFormSigninForm) {
    console.log(dataFormSigninForm);
    return this.http.post<any>(this.singupUserUrl, dataFormSigninForm)
  }
  isLoggedAdmin() {
    let token = localStorage.getItem("mytoken");
    if (!token) {
      return false
    }
    else {
      const helper = new JwtHelperService();
      const decodertoken = helper.decodeToken(token);
      if (decodertoken.role == "admin") {
        return true;
      } else {
        return false;
      }

    }
  }

  isLoggedUser() {
    let token = localStorage.getItem("mytoken");
    if (!token) {
      return false
    }
    else {
      const helper = new JwtHelperService();
      const decodertoken = helper.decodeToken(token);
      if (decodertoken.role == "user") {
        return true;
      } else {
        return false;
      }

    }
  }
  isLogged() {
    let token = localStorage.getItem("mytoken");
    if (!token) {
      return false
    }
    else {
      return true

    }
  }
  getAllUsers() {
    return this.http.get<any>(this.allusersUrl)
  }
  getOneUser(id) {
  return this.http.get<any>(this.oneuserUrl +id)
  }
  deleteUser(id) {
    return this.http.delete<any>(this.deleteUrl + id)
  }
  updateUser(dataFormSigninForm) {
    return this.http.put<any>(dataFormSigninForm, this.updateUrl )
  }
  SignIn(dataFormSigninForm) {
    console.log(dataFormSigninForm);
    let dataFormaAPI = this.http.post<any>(this.singinUserUrl, dataFormSigninForm)
    return dataFormaAPI
  }
}
