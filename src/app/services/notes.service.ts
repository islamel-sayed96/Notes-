import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  baseURL="https://routeegypt.herokuapp.com/"

  constructor(private _HttpClient:HttpClient) { }

  getAllNotes(data:any):Observable<any>{
    return this._HttpClient.post<any>(`${this.baseURL}getUserNotes`, data);
  }
}
