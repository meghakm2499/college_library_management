import { Component, OnInit } from '@angular/core';
import{BookingService} from "../Service/booking.service"

@Component({
  selector: 'app-adminviewbooking',
  templateUrl: './adminviewbooking.component.html',
  styleUrls: ['./adminviewbooking.component.css','../../assets/css/font-awesome.css','../../assets/css/bootstrap.css','../../assets/css/style.css']
})
export class AdminviewbookingComponent implements OnInit {

  constructor(public nemp:BookingService) { }
  emp:any
    ngOnInit(): void {
      this.nemp.getdata().subscribe((data: any)=>{
        console.log(data);
       this.emp=data;
      })  
    }
  }