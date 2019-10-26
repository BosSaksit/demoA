import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { student } from '../Models/student';

@Injectable({
  providedIn: 'root'
})
export class CallapiService {

  public static host:string = "https://localhost:5001/api/"

  constructor(public http:HttpClient) { }

  public GetStudentAll(){
    return this.http.get<student>(CallapiService.host + 'Student/GetStudentAll');
  }

  public GetStudentById(id:string){
    return this.http.get<student>(CallapiService.host + 'Student/GetStudentById/' +id);
  }

  public EditDataStudent(id:string , data){
    return this.http.put<student>(CallapiService.host + 'Student/EditStudent/' +id, data);
  }
}
