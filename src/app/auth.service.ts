import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, throwError } from 'rxjs';
import { Login } from 'src/Models/Login';
//import { map } from 'rxjs-compat/operator/map';
import { AuthResponse } from 'src/Models/AuthResponse';
import { Token } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})


export class AuthService {
islogged:boolean;
username:string;
password:string;
l:Login={Name:null,password:null}

realToken:AuthResponse={token:null};
token:string;
url:string="https://localhost:5001/api/Auth";
  constructor(private router:Router,private httpclient:HttpClient) { }

  Login(username:string,password:string):boolean
  {
   this.l.Name=username;
    this.l.password=password;
    //console.log(this.l.Name);
    //console.log(this.l.password);
    
    this.getusertoken().subscribe((data:string)=>{
    this.token=data;
    console.log(this.token);
    localStorage.setItem("token",this.token);
    console.log("token generated");
    
    this.realToken.token=this.token;
    console.log("token received");
    console.log(localStorage.getItem("token"));
   });
   
    if(localStorage.getItem("token")!==null || this.token !==null)
    {
      console.log('token received');
      
      this.islogged=true;
      return true;
    }
    else
    {
      console.log('token not received');
      this.islogged=false;
       return false;
    }
  
  }

  Logout()
  {
    this.islogged=false;
    localStorage.clear();
    this.router.navigate(['login']);
  }

 getusertoken()
 {
   //this.l.Name=localStorage.getItem("uname");
   //let user=JSON.stringify(this.l);
    return this.httpclient.post(this.url,this.l,{ responseType: 'text'});
  //.pipe(catchError(this.handleError));
 }

 handleError(error: HttpErrorResponse) {
  let msg = '';
  if (error.error instanceof ErrorEvent) {
    // client-side error
    msg = error.error.message;
  } else {
    // server-side error
    msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  return throwError(msg);
}
}