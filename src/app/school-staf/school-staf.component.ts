import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SchoolstafService } from '../services/schoolstaf.service';


@Component({
  selector: 'app-school-staf',
  templateUrl: './school-staf.component.html',
  styleUrls: ['./school-staf.component.css']
})
export class SchoolStafComponent implements OnInit {
  searchString: string = "";
  studentList: any;
  circularData: any;
  approveStatus = "Approved";
  rejectedStatus = "Rejected";
  circularMessageType = false;
  circularMessage: string = "";

  @ViewChild('secondDialog', { static: true }) secondDialog: TemplateRef<any> | undefined;
  constructor(private stafService: SchoolstafService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.retriveStudentDetails();
  }
  retriveStudentDetails() {
    this.stafService.getStudentDetails().subscribe((data) => {
      this.studentList = data;
      console.log(data);
      console.log(this.studentList);
    },
    )
  }
  approve(userAppId: any) {
    console.log(userAppId)
    this.stafService.updateStatus(userAppId, this.approveStatus).subscribe((data) => {
      console.log(data);
      this.retriveStudentDetails();
    },
      (error) => {
        // this.hasErrorOccurred = true;      
        // if (error.message) {
        //   this.errorMessage = error.message;
        // } 
        this.retriveStudentDetails();
        console.log(error)
      }
    );

  }
  rejected(userAppId: any) {
    console.log(userAppId)
    this.stafService.updateStatus(userAppId, this.rejectedStatus).subscribe((data) => {
      console.log(data);
      this.retriveStudentDetails();
    },
      (error) => {
        // this.hasErrorOccurred = true;      
        // if (error.message) {
        //   this.errorMessage = error.message;
        // }   
        console.log(error)
        this.retriveStudentDetails();
      }
    );

  }
  sendCircular() {
    console.log(this.circularData);
    
    this.stafService.updateCircular(this.circularData).subscribe((data) => {
      console.log(data);
      this.circularMessageType = true;
      this.circularMessage = "Circular Details Sended Suceffully";
    },
      (error) => {
        //this.hasErrorOccurred = true;      
        // if (error.message) {
        this.circularMessageType = true;
        this.circularMessage = "Circular Details Updated Suceffully";
        // }   

        console.log(error)
      }
    );
    this.modalService.open(this.secondDialog)
  
}
  close() {
    this.modalService.dismissAll();
  }

}
