import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  sendDataForm(name: string, phone: string, agree: boolean): Observable<any> {
    return this.http.post<any>('https://unknown-server-test.org/api', {
      name,
      phone,
      agree
    })
  }
}
