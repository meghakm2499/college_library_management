import { Component, OnInit } from '@angular/core';
import { BookingService } from '../Service/booking.service';

@Component({
  selector: 'app-studentviewboking',
  templateUrl: './studentviewboking.component.html',
  styleUrls: ['./studentviewboking.component.css','../../assets/css/font-awesome.css','../../assets/css/bootstrap.css','../../assets/css/style.css']
})
export class StudentviewbokingComponent implements OnInit {

  constructor(public nemp:BookingService) { }
  emp:any
    ngOnInit(): void {
      this.nemp.studgetdatas(localStorage.getItem('uname')||'').subscribe((data: any)=>{
        console.log(data);
       this.emp=data;
      })  
    }
  }