import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormControl, FormBuilder, FormGroup, Validator, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  // variables
  selectedFile: File = null;
  imageData: string;
  show: boolean;
  show2: boolean;
  public modifyForm: FormGroup;
  public user: any;
  id:number;

  constructor(builder: FormBuilder, private elementRef: ElementRef, @Inject(DOCUMENT) private doc,
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService) {
    // initialize variables values

    this.show = false;
    this.show2 = false;
    let modifyformscontrol = {
      firstname: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern("[A-Z][A-Za-z'é]*")]),
      lastname: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern("[A-Z][A-Za-z 'é]*")]),
      email: new FormControl("", [Validators.required, Validators.email, Validators.pattern("^[a-z][a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@+asteelflash+.com")]),
      photo: new FormControl("", [Validators.required,]),
      service: new FormControl("", [Validators.required,]),
      post: new FormControl("", [Validators.required,]),
      password: new FormControl("", [ Validators.minLength(8), Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'`\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{1,}')]),
      repassword: new FormControl("", [Validators.required,]),
    }
    this.modifyForm = builder.group(modifyformscontrol);
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



    let token = localStorage.getItem("mytoken")
    const helper = new JwtHelperService();
    const decodertoken = helper.decodeToken(token);
    let id = decodertoken.role.id;
    this.id=id;

    this.userService.getOneUser(id).subscribe(
      res => {
        this.user = res
        this.modifyForm.patchValue({
          firstname: this.user.firstname,
          lastname: this.user.lastname,
          email: this.user.email,
          photo: this.user.photo,
          service:this.user.service,
          post:this.user.post,
         
        })
      }
    )

  }
  // click event functions toggle
  showpassword() {
    this.show = !this.show;
  }
  showpassword2() {
    this.show2 = !this.show2;
  }
  get firstname() { return this.modifyForm.get('firstname') }
  get lastname() { return this.modifyForm.get('lastname') }
  get email() { return this.modifyForm.get('email') }
  get photo() { return this.modifyForm.get('photo') }
  get service() { return this.modifyForm.get('service') }
  get post() { return this.modifyForm.get('post') }
  get password() { return this.modifyForm.get('password') }
  get repassword() { return this.modifyForm.get('repassword') }
  get chek() { return this.modifyForm.get('chek') }

  onFileSelect(event)
  {
    this.selectedFile = <File>event.target.files[0]
    this.modifyForm.patchValue({ image: this.selectedFile });
    const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
    if (this.selectedFile && allowedMimeTypes.includes(this.selectedFile.type)) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imageData = reader.result as string;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }
  modifyUser() {
    
    const fd = new FormData();
    fd.append('firstname', this.modifyForm.value.firstname);
    fd.append('lastname', this.modifyForm.value.lastname);
    fd.append('email', this.modifyForm.value.email);
    fd.append('photo', this.selectedFile, this.selectedFile.name);
    fd.append('service', this.modifyForm.value.service);
    fd.append('post', this.modifyForm.value.post);
    fd.append('password', this.modifyForm.value.password);
    this.imageData = null;
    console.log(this.id)
    this.userService.updateUser(this.id,fd).subscribe(
      res => {
        this.toastr.warning(res.message);
       this.router.navigate(['/users']);
      },
      err => {
        this.toastr.error(err);
      }
    )
  }

}
