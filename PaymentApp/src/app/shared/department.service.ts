import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from './Department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private _http: HttpClient) { }

  readonly baseUrl ='http://localhost:61236/api/Department';
  formData: Department = new Department();
  list: Department[];

  postDepartment(){
    return this._http.post(this.baseUrl,this.formData);
  }

  putDepartment(){
    return this._http.put(`${this.baseUrl}/${this.formData.Id}`,this.formData);
  }
  deleteDepartment(id: number){
    return this._http.delete(`${this.baseUrl}/${id}`);
  }
  refreshList(){
    this._http.get(this.baseUrl)
    .toPromise()
    .then(res=>this.list = res as Department[]);
  }
}
