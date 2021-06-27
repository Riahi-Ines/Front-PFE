import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormControl, FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { AbbService } from '../../../../services/abb.service'
import { HoneywellService } from '../../../../services/honeywell.service'
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public dateDebut: any
  public dateFint: any
  public ABB1: any
  public show:Boolean = false
  public data: any
  public select: any
  public results2 :any
  public select2: any
  public type: any
  public type2: any
  public results3 :any 
  public results4 :any 
  public results:any
  public fpyForm: FormGroup;
  public single =[];
  multi: any[];
  view: any[] = [700, 400]
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Products Type ';
  showYAxisLabel = true;
  yAxisLabel = 'Products Number';
  colorScheme = {
    domain: ['#0000ff', '#A10A28', '#C7B42C', '#5AA454']
  };

  constructor(builder: FormBuilder, private elementRef: ElementRef, @Inject(DOCUMENT) private doc, private service: AbbService, private service2: HoneywellService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
    let fpyformscontrol = {
      date: new FormControl("", [Validators.required, Validators.pattern("^([1-9]|([012][0-9])|(3[01]))/([0]{0,1}[1-9]|1[012])/\d\d\d\d , [012]{0,1}[0-9]:[0-6][0-9] PM ~  $")]),
      client: new FormControl("", [Validators.required,]),
    }
    this.fpyForm = builder.group(fpyformscontrol);
  }


  ngOnInit(): void {
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

  getListeABB() {
    this.data = {
      dateDebut: this.dateDebut,
      dateFint: this.dateFint
    }
    if (this.ABB1 == 'ABB') {
      this.service.getABB(this.data).subscribe((data) => {
        this.select = data.recordset
      })
    } else {
      this.service2.getHONEYWELL(this.data).subscribe((data) => {
        this.select = data.recordset
      })

    }


  }


  getmachABB() {
    this.data = {
      dateDebut: this.dateDebut,
      dateFint: this.dateFint
    }
    if (this.ABB1 == 'ABB') {
      this.service.getABBmachine(this.data).subscribe((data) => {
        this.select2 = data.recordset

      })
    } else {
      this.service2.getHONEYWELLmachine(this.data).subscribe((data) => {
        this.select2 = data.recordset
      })

    }


  }

  onChange(abb) {
this.show = false
    this.ABB1 = abb
    this.getListeABB()
    this.getmachABB()
  }

  onChange2(data) {
    this.type = data
  }
  onChange3(data) {
    this.type2 = data
    this.gettotal()

  }
  gettotal() {
    this.data = {
      dateDebut: this.dateDebut,
      dateFint: this.dateFint,
      TypeTest: this.type,
      Id_Machine: this.type2

    }
    if (this.ABB1 == 'ABB') {
        this.service.getABBTotalprod(this.data).subscribe((data) => {
          this.show =true
        this.results = data.recordset[0].total
        this.service.getABBfirstprod(this.data).subscribe((data) =>{
          this.results2 =  data.recordset[0].perpassage
          this.service.getABBgoodprod(this.data).subscribe((data) =>{
            this.results4 =  data.recordset[0].total
            console.log(this.results4)
          this.service.getABBbadprod(this.data).subscribe((data) =>{
            this.results3 = data.recordset[0].total
          this.single =[{
            name:"TotalProd",
            value:this.results
          },
          {
            name:"GoodProd",
            value:this.results4
          },
          {
            name:"FirstProd",
            value:this.results2
          },
          {
            name:"BadProd",
            value:this.results3
          }
          
        ]
        console.log(this.single)
          })
          
        })
        })
      
      })
    
   
      
    } else{
      this.service2.getHONEYWELLtotal(this.data).subscribe((data) => {
        this.show =true
      this.results = data.recordset[0].total
      this.service2.getHONEYWELLfirst(this.data).subscribe((data) =>{
        this.results2 =  data.recordset[0].perpassage
        this.service2.getHONEYWELLgood(this.data).subscribe((data) =>{
          this.results4 =  data.recordset[0].total
        this.service2.getHONEYWELLbad(this.data).subscribe((data) =>{
        this.results3 = data.recordset[0].total
        this.single =[{
          name:"TotalProd",
          value:this.results
        },
        {
          name:"GoodProd",
          value:this.results4
        },
        {
          name:"FirstProd",
          value:this.results2
        },
        {
          name:"BadProd",
          value:this.results3
        }
      ]
      console.log(this.single)
        })
      })
    })
      
    
      
    })
  
 
    
  } 

  }
  dateDev(date) {


    this.dateDebut = date.replace('T', ' ')

  }


  dateFin(date) {

    this.dateFint = date.replace('T', ' ')
  }
  get date() { return this.fpyForm.get('date') }
  get client() { return this.fpyForm.get('client') }

  fpy() {
    console.log(this.fpyForm.value)
  }


  onSelect(event) {
    console.log(event);
  }

}
