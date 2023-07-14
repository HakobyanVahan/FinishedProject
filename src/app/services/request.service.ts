import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(public http: HttpClient) { }

  getRequest<TYPE>(url: string){
    return this.http.get<TYPE>(url)
  }

  postRequest<TYPE>(url: string, value: TYPE){
    let header = new HttpHeaders({'Content-type': 'application/json'})
    return this.http.post(url, value, {headers: header})
  }
}
