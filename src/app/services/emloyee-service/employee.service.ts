import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../../models/employee';
import { Observable } from 'rxjs';
import { httpConstants } from '../../constants/http/http';
import { EmployeeDTO } from '../../models/employeeDTO';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Employee[]> {
    try {
      return this.http.get<Employee[]>(httpConstants.API + httpConstants.employee.GET_ALL);
    } catch {
      return new Observable<Employee[]>;
    }
  }

  getById(id: number): Observable<EmployeeDTO> {
    try {
      return this.http.get<EmployeeDTO>(httpConstants.API + httpConstants.employee.GET_BY_ID + id);
    } catch {
      return new Observable<EmployeeDTO>;
    }
  }

  create(employee: EmployeeDTO) {
    let response: boolean = true;
    this.http.post(httpConstants.API + httpConstants.employee.CREATE, employee).subscribe({
      next: data => data,
      error: err => {
        console.log(err.message);
        response = false;
      },
      complete: () => {
        console.log('Created successfully');
        response = false;
      }
    })
  }

  update(employee: EmployeeDTO): Observable<EmployeeDTO> {
    return this.http.put<EmployeeDTO>(httpConstants.API + httpConstants.employee.UPDATE, employee)
  }

  delete(id: number) {
    let ids: number[] = [id];
    this.http.delete(httpConstants.API + httpConstants.employee.DELETE, { body: ids }).subscribe({
      next: data => console.log(data)
    })
  }

  deleteMultiple(ids: number[]) {
    this.http.delete(httpConstants.API + httpConstants.employee.DELETE, { body: ids }).subscribe({
      next: data => console.log(data)
    })
  }
}
