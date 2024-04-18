import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import {  Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit{
constructor(private _AuthService:AuthService,private router : Router){}

signIn=new FormGroup({
  UserName:new FormControl('',[Validators.required]),
  Password:new FormControl('',[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?$#]{8,10}$/)]),
})

FormData(){
  if(this.signIn.valid){
    console.log(this.signIn);
    this._AuthService.signIn(this.signIn.value).subscribe({
      next: (res) => 
        {
      console.log(res);
      // if(res.message=="Success"){
        this.router.navigate(['/profile'])
        localStorage.setItem("TOKEN",res.token)
        alert(res?.nest?.message || 'Welcome.');
      // }
        },
        error: (err) =>
          {
            console.error(err);
            alert(err?.error?.message || 'An error occurred during login.');
            this.signIn.reset();
          }
    })
 
   
  }

  else
    {
      // throw eror and the required fields
      this.validateAllFormFields(this.signIn);
      alert("Please fill out the required fields.");
    }
}


ngOnInit(): void {
  $('#signIn').particleground();
}

private validateAllFormFields(formgroup: FormGroup){
  Object.keys(formgroup.controls).forEach(field=>{
    const control = formgroup.get(field);
    if(control instanceof FormControl){
      control.markAsDirty({onlySelf:true})
    }else if(control instanceof FormGroup){
     this.validateAllFormFields(control);
    } 
  })
  }
  
}
