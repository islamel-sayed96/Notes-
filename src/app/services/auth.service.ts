import { RegestrationDto } from './../types/regestration-dto';
import { SignUpComponent } from './../components/sign-up/sign-up.component';
import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

   private baseUrl:string="http://localhost:5292/api/Account/";
  // LogIn="http://localhost:5292/api/Account/Login";

  constructor(private _HttpClient:HttpClient) { }

  signUp(data:any):Observable<any>
  {
    // return this._HttpClient.post(this.baseUrl,RegestrationDto)
    return this._HttpClient.post<any>(`${this.baseUrl}Register`, data);
  }
  //na ba3ml observable 3shan lma ab3at el api w yraga3 data awl ma a7s an fe data raga3t 3andi 
  //aro7 a3ml subscribe w aro7 a3rdha 3andi 

  signIn(data:any):Observable<any>
  {
    // return this._HttpClient.post(this.baseUrl,data)
    return this._HttpClient.post<any>(`${this.baseUrl}Login`, data);
  }

  isLoggedIn(){
     return !!localStorage.getItem('TOKEN')
  }
  //de mehtod 3adia gedn ha get mnha el token
}
//el services btb2a global 3la el project kolo 
//3shan keda han7ot feha el api 
//eh el far2 ben get-post-delete-put 
//get 3shan a get data
//post 3shan a send data w kman el post a2dar a3ml beha kol 7aga mn dol el get-post-put-delete 
//delete delete data
//put 3shan update data

//azai ba aklm el database !
//ba3ml import l... import{HttpClient} from '@angular/common/http'
