import { Injectable } from '@angular/core';
import { Contain } from 'src/Models/Contain';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContainService {
  c:Contain={pid:101,
    passportno:"Ram",
    ticketno:5000,
    flightcode:"jdlfjd"}
  
  clist:any; //[]=[
    /*{Pid:101,
      Passportno:"Ram",
      Ticketno:5000,
      Flightcode:"jdlfjd"},
      {Pid:101,
        Passportno:"Ram",
        Ticketno:5000,
        Flightcode:"jdlfjd"},
        {Pid:101,
          Passportno:"Ram",
          Ticketno:5000,
          Flightcode:"jdlfjd"},
          {Pid:101,
            Passportno:"Ram",
            Ticketno:5000,
            Flightcode:"jdlfjd"},
  ]*/
  url:string="http://localhost:5002/api/Contain"; 
  
  refreshList():Contain[]
  {
    return this.clist;
  }
  addcontain(c:Contain):void{
    this.clist.push(c);
  }
  conid:number;
  
  findcontain(id:string):any{
    this.conid=Number(id);
    this.c=this.clist.find(x=>x.Pid==this.conid);
    return this.c;
  }
  constructor(private httpclient:HttpClient) { }

  getcontains():Observable<Contain[]>{
    this.clist=this.httpclient.get(this.url);
    return this.clist;
  }

  getcontain(id:string):Observable<Contain>{
    return this.httpclient.get<Contain>(this.url+"/"+id);
  }

  addproduct(c:Contain):Observable<Contain>
  {
    return this.httpclient.post<Contain>(this.url,c,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
        
      })
    });
  }

  Editcontain(id:number,c:Contain):Observable<Contain>
  {
    return this.httpclient.put<Contain>(this.url+"/"+id,c,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
        
      })
    });
  }
    
  Deleteproduct(id:number):Observable<Contain>
  {
    return this.httpclient.delete<Contain>(this.url+"/"+id,{
      headers:new HttpHeaders({
        'Content-Type':'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin':'*',
        'Access-Control-Allow-Method':'*'
        
      })
      
    });
    this.getcontains();
  }

  private manageError(err_response:HttpErrorResponse)
  {
    if(err_response.error instanceof ErrorEvent)
    console.error('Client Side Error:',err_response.error.message);
    else
    console.error('Server Side Error:',err_response);

    return throwError('There is a little problem while processing your request.Sorry for the inconvenience');
    
  }
}
