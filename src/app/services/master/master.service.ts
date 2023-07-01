import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from './../../../environtment.example';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  private apiUrl = environment.apiUrl;

  constructor(private HttpClient: HttpClient,) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // User
  getUser() {
    return this.HttpClient.get(`${this.apiUrl}/users`)
  }
  showUser(id: any) {
    return this.HttpClient.get(`${this.apiUrl}/users/${id}`)
  }
  storeUser(data: any) {
    return this.HttpClient.post(`${this.apiUrl}/users`, data)
  }
  updateUser(id: any, data: any) {
    return this.HttpClient.put(`${this.apiUrl}/users/${id}`, data)
  }
  deleteUser(id: any) {
    return this.HttpClient.delete(`${this.apiUrl}/users/${id}`)
  }
}
