import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotesService } from '../../services/notes.service';
import { JwtPayload, jwtDecode } from "jwt-decode";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
constructor(private router:Router , private _AuthService:AuthService){

  const token = "localStorage.getItem('TOKEN')";
  const decoded = jwtDecode<JwtPayload>(token); 

  console.log(decoded);
  

  // this._NotesService.getAllNotes(data).subscribe(res=>{
  //   console.log(res);
    
  // })
if (!localStorage.getItem('TOKEN')){
  this.router.navigate(['/signin'])
}

}

}
