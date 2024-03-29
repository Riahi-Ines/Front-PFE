import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as $ from 'jquery';
import { FormControl, FormBuilder, FormGroup, Validator, Validators } from '@angular/forms'
import { User } from 'src/app/models/user';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 selectedFile:File=null;
 imageData: string;
  show: boolean;
  show2: boolean;
  public registerForm: FormGroup;
  constructor(builder: FormBuilder, private elementRef: ElementRef, @Inject(DOCUMENT) private doc,
  private userService:UserService,private http:HttpClient,
  private router:Router,
  private toastr: ToastrService) {
    // initialize variables values
   
    this.show = false;
    this.show2 = false;
    let registerformscontrol = {
      firstname: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern("[A-Z][A-Za-z'é]*")]),
      lastname: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern("[A-Z][A-Za-z 'é]*")]),
      email: new FormControl("", [Validators.required, Validators.email, Validators.pattern("^[a-z][a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@+asteelflash+.com")]),
      photo: new FormControl("", [Validators.required,]),
      service: new FormControl("", [Validators.required,]),
      post: new FormControl("", [Validators.required,]),
      password: new FormControl("", [Validators.required, Validators.minLength(8), Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'`\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{1,}')]),
      repassword: new FormControl("", [Validators.required,]),
      chek: new FormControl("", [Validators.required,]),
    }
    this.registerForm = builder.group(registerformscontrol);
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
  // click event functions toggle
  showpassword() {
    this.show = !this.show;
  }
  showpassword2() {
    this.show2 = !this.show2;
  }
  get firstname() { return this.registerForm.get('firstname') }
  get lastname() { return this.registerForm.get('lastname') }
  get email() { return this.registerForm.get('email') }
  get photo() { return this.registerForm.get('photo') }
  get service() { return this.registerForm.get('service') }
  get post() { return this.registerForm.get('post') }
  get password() { return this.registerForm.get('password') }
  get repassword() { return this.registerForm.get('repassword') }
  get chek() { return this.registerForm.get('chek') }

 /* onFileSelect(event: Event) {
    c*/
    onFileSelect(event)
    {
      this.selectedFile = <File>event.target.files[0]
      this.registerForm.patchValue({ image: this.selectedFile });
      const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
      if (this.selectedFile && allowedMimeTypes.includes(this.selectedFile.type)) {
        const reader = new FileReader();
        reader.onload = () => {
          this.imageData = reader.result as string;
        };
        reader.readAsDataURL(this.selectedFile);
      }
    }

  registerUser() {
   const fd=new FormData();
   fd.append('firstname', this.registerForm.value.firstname);
   fd.append('lastname', this.registerForm.value.lastname);
   fd.append('email', this.registerForm.value.email);
    fd.append('photo',this.selectedFile,this.selectedFile.name);
    fd.append('service', this.registerForm.value.service);
    fd.append('post', this.registerForm.value.post);
    fd.append('password', this.registerForm.value.password);
    this.imageData = null;
    this.userService.SignUp(fd).subscribe(
    res=>{
      this.toastr.success(res.message);
      this.router.navigate(['/login']);
    },
    err=>{
      this.toastr.error('Try with anathor email');
    }
  )
  }
 
}