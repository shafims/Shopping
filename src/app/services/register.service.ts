import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  GetUser():Observable<any> {
    return this.http.get<any>("http://localhost:3000/getuser");
  }

  PostUser(user:any):Observable<any> {
    return this.http.post<any>("http://localhost:3000/senddata", user);
  }
}
