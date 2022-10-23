import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUser() {
    return this.http.get('http://127.0.0.1:8000/api/profile');
  }
  getModuleperData() {
    return this.http.get('http://127.0.0.1:8000/api/module_name');
  }
  addUsers(data: any) {
    return this.http.post('http://127.0.0.1:8000/api/profile', data);
  }
  getDatabyid(id: string | number) {
    return this.http.get('http://127.0.0.1:8000/api/profile/' + id);
  }
  DeleteProfileData(id: string | number) {
    return this.http.delete('http://127.0.0.1:8000/api/profile/' + id);
  }
  editData(id: string | number, data: string | number) {
    return this.http.patch('http://127.0.0.1:8000/api/profile/' + id, data);
  }
  addPermissionData(data: any) {
    return this.http.post('http://127.0.0.1:8000/api/module_permission',data);
  }
  getModulePermissionData() {
    return this.http.get('http://127.0.0.1:8000/api/module_permission');
  }
  lastrecord(){
    return this.http.get('http://127.0.0.1:8000/api/lastrecord');
  
  }
  getModulePerP_id(id: string | number){
    return this.http.get('http://127.0.0.1:8000/api/getModulePerP_id' + id);
  }
  editPermissionData(id: string | number, data: any) {
    return this.http.patch('http://127.0.0.1:8000/api/module_permission/' + id, data);
  }
  UpdatePermissionData(data: any) {
    return this.http.post('http://127.0.0.1:8000/api/updatemoduleper', data);
  }
}
