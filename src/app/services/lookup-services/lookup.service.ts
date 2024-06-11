import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Option } from '../../models/common/option';
import { httpConstants } from '../../constants/http/http';

@Injectable({
  providedIn: 'root'
})
export class LookupService {

  constructor(private http: HttpClient) { }

  getDepartments(): Observable<Option[]> {
    return this.http.get<Option[]>(httpConstants.API + httpConstants.departments.GET);
  }

  getLocations(): Observable<Option[]> {
    return this.http.get<Option[]>(httpConstants.API + httpConstants.location.GET);
  }

  getJobtitles(): Observable<Option[]> {
    return this.http.get<Option[]>(httpConstants.API + httpConstants.jobTitle.GET);
  }

  getProjects(): Observable<Option[]> {
    return this.http.get<Option[]>(httpConstants.API + httpConstants.project.GET);
  }
}
