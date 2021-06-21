import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HoneywellService {

  constructor(private http: HttpClient) { }
  baseURL: string = "http://localhost:3000";
  private typeUrl1 = this.baseURL + "/HONEYWELL/listeTypeTestHONEYWELL"
  private machinehurl=this.baseURL + "/HONEYWELL/listeIdMachineHONEYWELL"
  private HONEYWELLFPY=this.baseURL + "/HONEYWELL/fpyHONEYWELL"
  private HONEYWELLtotalprod=this.baseURL + "/HONEYWELL/totalprodHONEYWELL"
  private HONEYWELLfirst=this.baseURL + "/HONEYWELL/totalfirstpassHONEYWELL"
  private HONEYWELLbad=this.baseURL + "/HONEYWELL/badprodHONEYWELL"
  private top5Url=this.baseURL + "/HONEYWELL/listeTopCinqDefautsHONEYWELL"
  private defUrl=this.baseURL + "/HONEYWELL/listeDefautsHONEYWELL"

  getHONEYWELL(data) {
    return this.http.post<any>(this.typeUrl1,data)
  }

  getHONEYWELLmachine(data) {
    return this.http.post<any>(this.machinehurl,data)
  }

  getHONEYWELLFPY(data) {
    return this.http.post<any>(this.HONEYWELLFPY,data)
  }

  getHONEYWELLtotal(data) {
    return this.http.post<any>(this.HONEYWELLtotalprod,data)
  }

  getHONEYWELLfirst(data) {
    return this.http.post<any>(this.HONEYWELLfirst,data)
  }

  getHONEYWELLbad(data) {
    return this.http.post<any>(this.HONEYWELLbad,data)
  }

  getHONEYWELLtop5(data) {
    return this.http.post<any>(this.top5Url,data)
  }

  getHONEYWELLdef(data) {
    return this.http.post<any>(this.defUrl,data)
  }

}
