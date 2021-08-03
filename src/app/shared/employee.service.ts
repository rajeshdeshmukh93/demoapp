import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  // selectedemployee: Employee;
  // employees : Employee[];
  private _geturl="http://localhost:4000/users/"

  constructor(private http: HttpClient) { }

  
  getempdata(){
    return this.http.get<any>(this._geturl);
  }

  // delete(_id){
  //   return this.http.delete<any>(`${this._geturl}${_id}`);
  // }
  
  delete(_id){
    return this.http.delete<any>('http://localhost:4000/users/' + _id);
  }

  getEmpById(id:string){
    return this.http.get<any>(this._geturl + '/' + id);
  }

  update(emp){
    return this.http.put<any>(this._geturl + '/' + emp._id, emp);
  }

  post(emp:Employee){
   return this.http.post<any>(this._geturl,emp);
  }
}
