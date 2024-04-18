import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators , FormBuilder } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
declare var $:any;
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit {
  isClicked=false
  

  isSuccess=false
  isUniqueEmail=false

  constructor(private _AuthService:AuthService , private fb : FormBuilder , private router : Router){

 
  }
  //ha3ml injection llservice bta3i ba5od asmo zai ma hoa AuthService

    signUp=new FormGroup({
    FName:new FormControl ('',[Validators.required,Validators.pattern(/^([a-zA-Z]+[,.]?[]?|[a-z]+['-]?)+$/)]),
    LName:new FormControl('',[Validators.required,Validators.pattern(/^([a-zA-Z]+[,.]?[]?|[a-z]+['-]?)+$/)]),
    Email:new FormControl('',[Validators.required,Validators.email]),
    // age:new FormControl('',Validators.required),
    UserName:new FormControl('',[Validators.required]),
    Password:new FormControl('',[Validators.required,Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?$#]{8,10}$/)]),
  })



  FormData(){
    this.isClicked=true
    if(this.signUp.valid)
   { 
   console.log(this.signUp.value);
    this._AuthService.signUp(this.signUp.value).subscribe({


        next: (res) => {
          console.log(res);
          alert(res?.next?.message || 'Success.');
          
               
          this.isClicked=false
          this.isSuccess=true
          // this.isUniqueEmail=false

          this.router.navigate(['/signin']);
    
        },

      error: (err) => {
      console.log(err);
      alert(err?.error?.message || 'An error occurred during SignUp.');
      this.signUp.reset()
      this.isUniqueEmail=true

    },
    complete() {  
      console.log('Complete');
      
    },
    
    })
    
  //response da ai asm ana 3aiz asmih biha 
    
  }

  else{
    
  }



  } 

  ngOnInit(): void {
    $('#signUp').particleground();

    
  }


    
}
