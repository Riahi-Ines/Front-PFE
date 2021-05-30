import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormControl, FormBuilder, FormGroup, Validator, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  id:number
  user:any
    constructor(private _router: Router ,builder: FormBuilder, private elementRef: ElementRef, @Inject(DOCUMENT) private doc,
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    let token = localStorage.getItem("mytoken")
    const helper = new JwtHelperService();
    const decodertoken = helper.decodeToken(token);
    let id = decodertoken.role.id;
    this.id=id;

    this.userService.getOneUser(id).subscribe(
      res => {
        this.user = res
       
      }
    )
  }
  

}
