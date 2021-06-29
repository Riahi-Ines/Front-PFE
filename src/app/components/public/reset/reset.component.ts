import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormControl, FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {ResetService} from '../../../services/reset.service'

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {
  public loginForm: FormGroup;
  public errorMessage: String = "";
  constructor(builder: FormBuilder,private elementRef: ElementRef,
    private _router: Router, @Inject(DOCUMENT) private doc , private service:ResetService,
  private toastr: ToastrService ) {
    let loginformscontrol = {
      chek: new FormControl("", [Validators.required,]),
      email: new FormControl(),
  
    }
    this.loginForm = builder.group(loginformscontrol);
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





  ResetPassword() {
    let data = this.loginForm.value;
    this.service.resetPassword({email:data.email}).subscribe(
      (res) => {
       
        this.toastr.success(res.message);
        this._router.navigateByUrl('/login');
      },
      err=>{
        this.toastr.error('Email not found');
      }
     
    )
  }

}
