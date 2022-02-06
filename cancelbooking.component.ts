import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookingService } from '../Service/booking.service';

@Component({
  selector: 'app-cancelbooking',
  templateUrl: './cancelbooking.component.html',
  styleUrls: ['./cancelbooking.component.css']
})
export class CancelbookingComponent implements OnInit {

  constructor(public nemp:BookingService,private route: ActivatedRoute,private router: Router) { }
  sub:any;
  id:any;
  stud: any;
  
  body = new URLSearchParams();
  body1 = new URLSearchParams();
  uname="";
  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      });
      let dateTime = new Date()
      this.body.set('cid', this.id);
      this.body.set('status', "canceled");
     this.nemp.updates(this.id,this.body).subscribe(res => {
      alert(this.body)});
     
       this.router.navigate(['studenthome']);
   
   
  }
  
  onSubmit() {
    // console.log(this.studreg.value["sname"]);
   
  }
}
