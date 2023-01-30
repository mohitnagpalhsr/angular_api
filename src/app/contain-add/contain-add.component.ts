import { Component, OnInit} from '@angular/core';
import { Contain } from 'src/Models/Contain';
import { ContainService } from '../contain.service';

@Component({
  selector: 'app-contain-add',
  templateUrl: './contain-add.component.html',
  styleUrls: ['./contain-add.component.css']
})
export class ContainAddComponent implements OnInit{
  c:Contain={pid:null,passportno:'',ticketno:null,flightcode:''}
  message:string;
  constructor(private containservice:ContainService) { }

  ngOnInit(): void {
  }

  save(data:any):void
  {
   this.containservice.addproduct(data).subscribe(
     data=>{
       this.message="Product Added Successfully";
    }
   ) 
    console.log(data);
    console.log(this.c);
  }
    
}
