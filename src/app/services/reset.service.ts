import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ResetService {

  constructor(private http: HttpClient) { }
  baseURL: string = "http://localhost:3000";
  private typeUrl = this.baseURL + "/reset/resetPassword"
 

  
  resetPassword(data) {
    return this.http.post<any>(this.typeUrl,data)
  }

 

}
