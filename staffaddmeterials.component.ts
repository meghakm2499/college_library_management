import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms'
import { MeterialsService } from '../Service/meterials.service';
@Component({
  selector: 'app-staffaddmeterials',
  templateUrl: './staffaddmeterials.component.html',
  styleUrls: ['./staffaddmeterials.component.css','../../assets/css/font-awesome.css','../../assets/css/bootstrap.css','../../assets/css/style.css']
})
export class StaffaddmeterialsComponent implements OnInit {

  stud: any;
  
  body = new URLSearchParams();
 
   constructor(public nemp: MeterialsService) { }
   meterial = new FormGroup({
     sub: new FormControl(''),
     doc: new FormControl(''),
     
   });

  ngOnInit(): void {
  }
 ////////////////////////////////////////////



 fileName = '';
 onFileSelected(event:any) {

  const file:File = event.target.files[0];

  if (file) {

      this.fileName = file.name;

      
  }
}

onFileChange(event:any) {
  if (event.target.files.length > 0) {
    const file = event.target.files[0];
   // this.meterial.get('avatar').setValue(file);
  }
}




  onSubmit() {
    console.log(this.meterial.value["sub"]);
   
   this.body.set('sub', this.meterial.value["sub"]);
   this.body.set('doc',this.fileName);
   //alert(this.meterial.get('fileSource').value);
  
// body.set('password', password);
    this.nemp.create(this.body).subscribe(res => {
     console.log('Meterial added!')});
    // console.warn(this.myform.value);
    // this.data=this.myform.value;
    // console.log(this.myform.get('firstName')?.value)

  }


}


