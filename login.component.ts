import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { LoginService } from '../Service/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../../assets/css/font-awesome.css','../../assets/css/bootstrap.css','../../assets/css/style.css']
})
export class LoginComponent implements OnInit {

 
  stud: any;
  
  body = new URLSearchParams();
 
   constructor(public nemp: LoginService,private router: Router) { }
   login = new FormGroup({
     id: new FormControl(''),
     pswd: new FormControl(''),
    
   });

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.login.value["id"]);
 
    this.nemp.getById(this.login.value["id"]).subscribe((data: any)=>{
      console.log(data[0]['role']);
    if(data[0]['role']==="admin")
    {
      this.router.navigate(['adminhome']);
    }
    else if(data[0]['role']==="teacher")
    {
      localStorage.setItem('uname', data[0]["id"]);
      this.router.navigate(['staffhome']);
    }
    else if(data[0]['role']==="student")
    {
      console.log('--------------------');
      localStorage.setItem('uname', data[0]["id"]);
      this.router.navigate(['studenthome']);
    }
    else{
      alert('Inkvalid Username or password');
    }
    })

  }


}
