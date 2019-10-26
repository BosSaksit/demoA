import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CallapiService } from '../service/callapi.service';
import { student } from '../Models/student';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.page.html',
  styleUrls: ['./student-edit.page.scss'],
})
export class StudentEditPage implements OnInit {

  getid: any
  dataStudent:student
  getDataById: FormGroup
  

  constructor(public callapi: CallapiService, public activete: ActivatedRoute, public formbuilder: FormBuilder) {
    this.getid = activete.snapshot.paramMap.get('_id');
    this.getDataById = this.formbuilder.group({
      'studentId': [null, Validators.required],
      'studentName': [null, Validators.required]
    });

    this.callapi.GetStudentById(this.getid).subscribe(it => {
      this.getDataById.patchValue(it);
      console.log(this.getDataById.value);
    });
  }

  ngOnInit() {
  }

  editdataStudent(){
    this.dataStudent = this.getDataById.value;
    console.log(this.dataStudent);
    this.callapi.EditDataStudent(this.getid,this.dataStudent).subscribe(it =>{
      console.log(it);
    });
  }

}
