import { Component, OnInit } from '@angular/core';
import { CallapiService } from '../service/callapi.service';
import { student } from '../Models/student';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.page.html',
  styleUrls: ['./student-list.page.scss'],
})
export class StudentListPage implements OnInit {

  GetDataStudent: student

  constructor(public callapi: CallapiService, public router:Router) {

  }

  ngOnInit() {
    this.getAllstudent();
  }

  getAllstudent() {
    this.callapi.GetStudentAll().subscribe(it => {
      // console.log(it);
      this.GetDataStudent = it;
      console.log(this.GetDataStudent);

    });
  }

  gotoStudentAddPage(){
    this.router.navigate(['/student-add']);
  }

  gotoStudentEditPage(id){
    this.router.navigate(['/student-edit', {_id:id}]);
  }

}
