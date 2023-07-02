import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from './../../../environtment';

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
  updateStatusUser(id: any, data: any) {
    return this.HttpClient.put(`${this.apiUrl}/users/isActive/${id}`, data)
  }

  // Order
  getOrder() {
    return this.HttpClient.get(`${this.apiUrl}/orders`)
  }
  showOrder(id: any) {
    return this.HttpClient.get(`${this.apiUrl}/orders/${id}`)
  }
  storeOrder(data: any) {
    return this.HttpClient.post(`${this.apiUrl}/orders`, data)
  }
  statusOrder(id: any, data: any) {
    return this.HttpClient.put(`${this.apiUrl}/orders/status/${id}`, data)
  }
  pickUpOrder(id: any, data: any) {
    return this.HttpClient.put(`${this.apiUrl}/orders/pickup/${id}`, data)
  }
  deleteOrder(id: any) {
    return this.HttpClient.delete(`${this.apiUrl}/orders/${id}`)
  }
  showByUserIdOrder(id: any) {
    return this.HttpClient.get(`${this.apiUrl}/orders/byUserId/${id}`)
  }
  cancelingOrder(id: any) { 
    return this.HttpClient.get(`${this.apiUrl}/orders/cancelingOrder/${id}`)
  }

  // Driver
  getDriver() {
    return this.HttpClient.get(`${this.apiUrl}/driver-details`)
  }
  showDriver(id: any) {
    return this.HttpClient.get(`${this.apiUrl}/driver-details/${id}`)
  }
  storeDriver(data: any) {
    return this.HttpClient.post(`${this.apiUrl}/driver-details`, data)
  }
  updateDriver(id: any, data: any) {
    return this.HttpClient.put(`${this.apiUrl}/driver-details/${id}`, data)
  }
  deleteDriver(id: any) {
    return this.HttpClient.delete(`${this.apiUrl}/driver-details/${id}`)
  }
  showByUserIdDriver(id: any) {
    return this.HttpClient.get(`${this.apiUrl}/driver-details/byUserId/${id}`)
  }

}
