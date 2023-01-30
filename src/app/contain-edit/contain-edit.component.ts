import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contain } from 'src/Models/Contain';
import { ContainService } from '../contain.service';

@Component({
  selector: 'app-contain-edit',
  templateUrl: './contain-edit.component.html',
  styleUrls: ['./contain-edit.component.css']
})
export class ContainEditComponent {
  message:string;
  c:Contain;   //object
  id:string;
  constructor(private containservice:ContainService,private route:Router, private router:ActivatedRoute){
    this.id=this.router.snapshot.paramMap.get('id');
  }
  
  ngOnInit(): void {
    this.containservice.getcontain(this.id).subscribe(
      data=>{
        this.c=data;
      })
  }

  Update(contain:Contain)
  {
    let id=contain.pid;
    this.containservice.Editcontain(id,contain).subscribe(
      data=>{
        this.message="Product updated successfully";
      }
    )
  }
}
