import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AbbService } from '../../../../services/abb.service'
import { HoneywellService } from '../../../../services/honeywell.service'
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
@Component({
  selector: 'app-fpy',    
  templateUrl: './fpy.component.html',
  styleUrls: ['./fpy.component.css']
})
export class FpyComponent implements OnInit {
  public ABB1: any
  public dateDebut: any
  public dateFint: any
  public results:any
  public data:any
  public select:any
  public select2:any
  public type:any
  public type2:any
  constructor(private elementRef: ElementRef, @Inject(DOCUMENT) private doc, private service: AbbService ,private service2: HoneywellService) { 
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [ 'FPY'];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColors =['rgba(255, 20, 0, 1)'];
  ngOnInit(): void {
    this.pieChartData =[]
    var s1 = document.createElement("script");
    s1.type = "text/javascript";
    s1.src = "assets/js/jquery.min.js";
    this.elementRef.nativeElement.appendChild(s1);

    var s2 = document.createElement("script");
    s2.type = "text/javascript";
    s2.src = "assets/js/popper.min.js";
    this.elementRef.nativeElement.appendChild(s2);

    var s3 = document.createElement("script");
    s3.type = "text/javascript";
    s3.src = "assets/js/bootstrap.min.js";
    this.elementRef.nativeElement.appendChild(s3);

    var s4 = document.createElement("script");
    s4.type = "text/javascript";
    s4.src = "assets/plugins/simplebar/js/simplebar.js";
    this.elementRef.nativeElement.appendChild(s4);

    var s5 = document.createElement("script");
    s5.type = "text/javascript";
    s5.src = "assets/js/sidebar-menu.js";
    this.elementRef.nativeElement.appendChild(s5);

    var s6 = document.createElement("script");
    s6.type = "text/javascript";
    s6.src = "assets/js/app-script.js";
    this.elementRef.nativeElement.appendChild(s6);

   

  }

  onChange(abb) {
    this.ABB1 = abb
    this.getListeABB()
    this.getmachABB()
  }
  
  dateDev(date) {
    this.dateDebut = date.replace('T', ' ')
  }

  dateFin(date) {
    this.dateFint = date.replace('T', ' ')
  }

  getListeABB() {
     this.data = {
      dateDebut :this.dateDebut,
      dateFint:this.dateFint
    }
    if(this.ABB1 == 'ABB'){
      this.service.getABB(this.data).subscribe((data) =>{
        
        this.select = data.recordset
        console.log(this.select,'abbbbbbbbbbbbbbbb')

      })
    }else {
      this.service2.getHONEYWELL(this.data).subscribe((data) =>{
            
             this.select = data.recordset

         })

    }

 
  }


  getmachABB() {
    this.data = {
     dateDebut :this.dateDebut,
     dateFint:this.dateFint
   }
   if(this.ABB1 == 'ABB'){
     this.service.getABBmachine(this.data).subscribe((data) =>{
       
       this.select2 = data.recordset
       console.log(this.select2,'abbbbbbbbbbbbbbbb')

     })
   }else {
     this.service2.getHONEYWELLmachine(this.data).subscribe((data) =>{
           
            this.select2 = data.recordset
            console.log(this.select2,'hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh')
        })

   }
 

 }

 onChange2 (data) {
       this.type =data
 }
 onChange3 (data) {
      this.type2 = data
      this.getFPY()
 }
 getFPY() {
  this.data = {
   dateDebut :this.dateDebut,
   dateFint:this.dateFint,
   TypeTest :this.type,
    Id_Machine:this.type2

 }
 if(this.ABB1 == 'ABB'){
   this.service.getABBFPY(this.data).subscribe((data) =>{
    this.pieChartData =[]
    this.results = data.recordsets[0][0].Result
    this.pieChartData.push(this.results)

   })
 }else {
   this.service2.getHONEYWELLFPY(this.data).subscribe((data) =>{
         this.results = data.recordsets[0][0].Result
         this.pieChartData =[]
         this.pieChartData.push(this.results)
      })

 }

}






}
