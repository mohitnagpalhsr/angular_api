import { Component } from '@angular/core';
import { Contain } from 'src/Models/Contain';
import { ContainService } from '../contain.service';

@Component({
  selector: 'app-contain-list',
  templateUrl: './contain-list.component.html',
  styleUrls: ['./contain-list.component.css']
})
export class ContainListComponent {
clist:Contain[];
message:string;
  constructor(private containservice:ContainService) { }
  



  ngOnInit(): void {
    if(localStorage.getItem("token")!=null)
    {
    
    this.containservice.getcontains().subscribe(
      data=>{
        this.clist=data;
        console.log(this.clist);
      });
    } 
    
    else{
      console.log('sorry u have not logged in');
    }
  }

  clickMethod(contain: Contain) {
    if(confirm("Are you sure to delete "+contain.passportno)) {
      this.containservice.Deleteproduct(contain.pid).subscribe()
      {
      this.message="Product deleted Successfully";
      this.clist = this.clist.filter(item => item.pid !=contain.pid);
      console.log(this.clist.length);
      }
    }
  }
}
