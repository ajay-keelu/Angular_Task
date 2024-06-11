import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Role } from '../../models/role';
import { httpConstants } from '../../constants/http/http';
import { Option } from '../../models/common/option';
import { Employee } from '../../models/employee';
import { RoleDTO } from '../../models/roleDTO';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Role[]> {
    return this.http.get<Role[]>(httpConstants.API + httpConstants.role.GET_ALL);
  }

  getAllOptions(): Observable<Option[]> {
    return this.http.get<Option[]>(httpConstants.API + httpConstants.role.GET_ALL_OPTIONS);
  }

  getById(id: number): Observable<RoleDTO> {
    return this.http.get<RoleDTO>(httpConstants.API + httpConstants.role.GET_BY_ID + id);

  }

  getAssignedEmployees(id: number): Observable<Employee[]> {
    return this.http.get<Employee[]>(httpConstants.API + httpConstants.role.GET_ASSIGNED_EMPLOYEES + id);
  }

  create(Role: RoleDTO): Observable<RoleDTO> {
    return this.http.post<RoleDTO>(httpConstants.API + httpConstants.role.CREATE, Role)
  }

  update(Role: RoleDTO): Observable<RoleDTO> {
    return this.http.put<RoleDTO>(httpConstants.API + httpConstants.role.UPDATE, Role)
  }
}
