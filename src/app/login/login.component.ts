import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
message:string="Good Day!!!";
age:number;
validuser:boolean;
tokenvalue:string;
uname:string;
pwd:string;
returnUrl:String;

  constructor(private authservice:AuthService,
       private router:Router,
      private route:ActivatedRoute)
     { 
     }

  ngOnInit(): void {
    this.authservice.Logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  Login()
  {
    this.validuser= this.authservice.Login(this.uname,this.pwd);
    //console.log(this.validuser);
    console.log("Login page:"+this.validuser);
    console.log(this.authservice.token);
    if(this.authservice.token!=null)
    {
      localStorage.setItem("uname",this.uname);
      this.router.navigate(['clist']);
    }
    else
    {
      this.message="Sorry! Invalid User";
    }
  }
}