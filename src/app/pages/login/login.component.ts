import { Component, OnInit } from '@angular/core';
import { validateHorizontalPosition, validateVerticalPosition } from '@angular/cdk/overlay';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ConexionService } from 'app/servicios/conexion.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Torm: FormGroup;
  cargando = false;


  constructor(
    private _snackBar: MatSnackBar, 
    private auth: ConexionService,
    private fb: FormBuilder, 
    private router: Router, 

  ){

    this.Torm = new FormGroup({
    username: new  FormControl("",Validators.required),
    password: new FormControl("",Validators.required)});


   }

  ngOnInit(): void {
  }

  ingresar(){

    const username = this.Torm.value.username;
    const password = this.Torm.value.password;
    console.log(this.Torm.value);
    this.auth.authpost(this.Torm.value).subscribe(res =>{
      console.log(res); 
      localStorage.setItem('token',res.access_token)
      this.cargando = true
      setTimeout(() =>{
         this.router.navigate(['dashboard']);
      }, 1500)


      })
    
    
    }
    error_decarga(){
      this.cargando = true
      setTimeout(() =>{
         this.router.navigate(['dashboard']);
      }, 1500)
    }    


}
