import { Component, OnInit, ElementRef, Inject  } from '@angular/core';
import { DOCUMENT, PathLocationStrategy } from '@angular/common';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  p: number = 1;
  public users: any[] = [];
  constructor(private elementRef: ElementRef,
     @Inject(DOCUMENT) private doc,
     private userservice: UserService,
     private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getallusers();

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

  getallusers() {
    this.userservice.getAllUsers().subscribe(res => {
      this.users=res
      console.log(res)
    },error =>{
      console.log(error)
    } 
    )
  }

  delete(user) {
    if (confirm('Are sure you want to delete this User ?')) {
    let index = this.users.indexOf(user)
    this.users.splice(index, 1);
    this.userservice.deleteUser(user.id).subscribe(
      res => {
        this.getallusers();
        this.toastr.success('User deleted succefully!','Good !');
      },
      (error) => {
        console.log(error);
      }
    )
  }}
}
