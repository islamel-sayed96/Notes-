import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  constructor(public _AuthService:AuthService,private router:Router){
    
  }

  logout(){
    localStorage.clear()
    this.router.navigate(['/signin'])
  }
  ngOnInit() {
    
  }
  

}
