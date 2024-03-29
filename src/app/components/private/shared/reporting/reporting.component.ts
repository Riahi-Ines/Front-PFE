import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AbbService } from '../../../../services/abb.service'
import { HoneywellService } from '../../../../services/honeywell.service'
import { ChartType, ChartOptions, ChartDataSets } from 'chart.js';
import { SingleDataSet, Label, Color, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
@Component({
  selector: 'app-reporting',
  templateUrl: './reporting.component.html',
  styleUrls: ['./reporting.component.css']
})
export class ReportingComponent implements OnInit {
  p: number = 1;
  public dateDebut: any
  public dateFint: any
  public ABB1: any
  public data: any
  public select: any
  public results2: any
  public select2: any
  public type: any
  public type2: any
  public results3: any
  public results: any
  public results4: any
  public show :Boolean = false
  public results5: any
  public results6: any
  public results7: any
  constructor(private elementRef: ElementRef, @Inject(DOCUMENT) private doc, private service: AbbService, private service2: HoneywellService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['Def1', 'Def2', 'Def3', 'Def4', 'Def5'];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColors = [
    {
      backgroundColor: ['red', '', 'white', 'blue', 'grey'],
    },
  ];

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
    this.ABB1 = abb
    this.show = false
    this.getListeABB()
    this.getmachABB()
  }

  onChange2(data) {
    this.type = data
  }

  dateDev(date) {
    this.dateDebut = date.replace('T', ' ')
  }
  onChange3(data) {
    this.type2 = data
    this.getFPY()
  }

  dateFin(date) {

    this.dateFint = date.replace('T', ' ')
  }
  getFPY() {
    this.data = {
      dateDebut: this.dateDebut,
      dateFint: this.dateFint,
      TypeTest: this.type,
      Id_Machine: this.type2
    }
    if (this.ABB1 == 'ABB') {
      this.service.getABBFPY(this.data).subscribe((data) => {
        this.show = true
        this.results = data.recordsets[0][0].Result
        this.service.getABBTotalprod(this.data).subscribe((data) => {
          this.results2 = data.recordset[0].total
          console.log(this.results2)
          this.service.getABBfirstprod(this.data).subscribe((data) => {
            this.results3 = data.recordset[0].perpassage
            this.service.getABBgoodprod(this.data).subscribe((data) => {
              this.results7 = data.recordset[0].total
              console.log(this.results7)
            this.service.getABBbadprod(this.data).subscribe((data) => {
              this.results4 = data.recordset[0].total
              this.service.getABBtop5(this.data).subscribe((res) => {
                this.results5 = res.data[0]
                this.pieChartData = []
                for (var i = 0; i < this.results5.length; i++) {
                  this.pieChartData.push(this.results5[i].quantite)
                }
                this.service.getABBdef(this.data).subscribe((res) => {
                  this.results6 = res.data[0]
                })
              })
              })
            })

          })
        })

      })
    } else {
      this.service2.getHONEYWELLFPY(this.data).subscribe((data) => {
        this.show = true
        this.results = data.recordsets[0][0].Result
        this.service2.getHONEYWELLtotal(this.data).subscribe((data) => {
          this.results2 = data.recordset[0].total
          this.service2.getHONEYWELLgood(this.data).subscribe((data) => {
            this.results7 = data.recordset[0].total
          this.service2.getHONEYWELLfirst(this.data).subscribe((data) => {
            this.results3 = data.recordset[0].perpassage
            this.service2.getHONEYWELLbad(this.data).subscribe((data) => {
              this.results4 = data.recordset[0].total
              this.service2.getHONEYWELLtop5(this.data).subscribe((res) => {
                this.results5 = res.data[0]
                this.pieChartData = []
                for (var i = 0; i < this.results5.length; i++) {
                  this.pieChartData.push(this.results5[i].quantite)
                }

                this.service2.getHONEYWELLdef(this.data).subscribe((res) => {
                  this.results6 = res.data[0]
                })
              })
            })
            })
          })
        })
      })

    }

  }

  print() {
    window.print()
  }

}
