import { Injectable } from '@angular/core';
import { EmployeeDetail } from './employee-detail.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailService {

  constructor(private http: HttpClient) { }
  formData: EmployeeDetail = new EmployeeDetail();
  readonly baseURL = 'https://localhost:44379/api/Employees';
  list: EmployeeDetail[];

  postEmployeeDetail() {
    return this.http.post(this.baseURL, this.formData);
  }
  refreshList() {
    this.http.get(this.baseURL).toPromise().then(res => this.list = res as EmployeeDetail[]);
  }
}
