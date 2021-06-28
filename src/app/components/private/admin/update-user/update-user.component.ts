import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormControl, FormBuilder, FormGroup, Validator, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  // variables
  public users: any[] = [];
  selectedFile: File = null;
  imageData: string;
  user: any;
  aa:any
  bb:any
  id:number;
  public modifyForm: FormGroup;
  constructor(builder: FormBuilder, private elementRef: ElementRef, @Inject(DOCUMENT) private doc,
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService) {
    // initialize variables values
    let modifyformscontrol = {
      firstname: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern("[A-Z][A-Za-z'é]*")]),
      lastname: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern("[A-Z][A-Za-z 'é]*")]),
      email: new FormControl("", [Validators.required, Validators.email, Validators.pattern("^[a-z][a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@+asteelflash+.com")]),
      photo: new FormControl(""),
      service: new FormControl(""),
      post: new FormControl(""),
    }
    this.modifyForm = builder.group(modifyformscontrol);
  }

  ngOnInit(): void {
    let idUser = this.route.snapshot.params.id;
    this.id=idUser;
    this.userService.getOneUser(idUser).subscribe(
      res => {
        this.aa = res.service
        this.bb = res.post
        console.log(res,"reeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee")
        this.user = res;
        this.modifyForm.patchValue({
          firstname: this.user.firstname,
          lastname: this.user.lastname,
          email: this.user.email,
          photo: this.user.photo,
          service: this.user.service,
          post: this.user.post,
        })
      },
      err => {
        console.log(err);
      }
    )
  }
  get firstname() { return this.modifyForm.get('firstname') }
  get lastname() { return this.modifyForm.get('lastname') }
  get email() { return this.modifyForm.get('email') }
  get photo() { return this.modifyForm.get('photo') }
  get service() { return this.modifyForm.get('service') }
  get post() { return this.modifyForm.get('post') }
  

  onFileSelect(event) {
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
    this.imageData = null;
    this.userService.updateUser(this.id,fd).subscribe(
      res => {
        this.toastr.success(res.message);
        this.router.navigate(['/users']);
      },
      err => {
        this.toastr.error(err);
      }
    )
  }
}