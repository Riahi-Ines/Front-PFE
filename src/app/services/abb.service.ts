import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AbbService {

  constructor(private http: HttpClient) { }
  baseURL: string = "http://localhost:3000";
  private typeUrl = this.baseURL + "/ABB/listeTypeTestABB"
  private machineUrl=this.baseURL + "/ABB/listeIdMachineABB"
  private ABBFPYUrl=this.baseURL + "/ABB/fpyABB"
  private totalprodUrl=this.baseURL + "/ABB/totalprodABB"
  private firstprodUrl=this.baseURL + "/ABB/totalfirstpassABB"
  private badprodUrl=this.baseURL + "/ABB/badprodABB"
  private goodprodUrl=this.baseURL + "/ABB/goodprodABB"
  private top5Url=this.baseURL + "/ABB/listeTopCinqDefautsABB"
  private defUrl=this.baseURL + "/ABB/listeDefautsABB"

  getABB(data) {
    return this.http.post<any>(this.typeUrl,data)
  }
  
  getABBmachine(data) {
    return this.http.post<any>(this.machineUrl,data)
  }

  getABBFPY(data) {
    return this.http.post<any>(this.ABBFPYUrl,data)
  }

  getABBTotalprod(data) {
    return this.http.post<any>(this.totalprodUrl,data)
  }

  getABBfirstprod(data) {
    return this.http.post<any>(this.firstprodUrl,data)
  }

  getABBbadprod(data) {
    return this.http.post<any>(this.badprodUrl,data)
  }

  getABBgoodprod(data) {
    return this.http.post<any>(this.goodprodUrl,data)
  }

  getABBtop5(data) {
    return this.http.post<any>(this.top5Url,data)
  }

  getABBdef(data) {
    return this.http.post<any>(this.defUrl,data)
  }

}
