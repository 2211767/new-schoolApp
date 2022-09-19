import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SchoolParentService } from '../services/school-parent.service';

@Component({
  selector: 'app-circular',
  templateUrl: './circular.component.html',
  styleUrls: ['./circular.component.css']
})
export class CircularComponent implements OnInit {
  parentData: any;
acknowldge:string="Excepted"
  constructor( private route:ActivatedRoute,private schoolParentService: SchoolParentService) { }

  ngOnInit(): void {
    this.retrieveData();

  }
  retrieveData() {
    this.schoolParentService.getStudent().subscribe((data) => {
      this.parentData=data;
      console.log(data);
    },
    (error)=>{
      console.log(error)
    }
    )}
    acknowldege(event:any,circularId:any){
   
      this.schoolParentService.acknowldge(this.acknowldge,circularId).subscribe((data) => {
        console.log(data)
        this.retrieveData();
      },
      (error)=>{
        console.log(error)
        this.retrieveData();
      })
    }

}
