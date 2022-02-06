import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { homerouting } from './home/homerouting';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentregComponent } from './studentreg/studentreg.component';
import { StaffregComponent } from './staffreg/staffreg.component';
import { LoginComponent } from './login/login.component';
import { ViewStudentComponent } from './view-student/view-student.component';
import { ViewStaffComponent } from './view-staff/view-staff.component';
import { AddBookComponent } from './add-book/add-book.component';
import { AdminviewBookComponent } from './adminview-book/adminview-book.component';
import { StudentViewBookComponent } from './student-view-book/student-view-book.component';
import { StaffviewBooksComponent } from './staffview-books/staffview-books.component';
import { HomeComponent } from './home/home.component';
import { AdminhomeComponent } from './adminhome/adminhome.component';
import { StudenthomeComponent } from './studenthome/studenthome.component';
import { StudentviewstaffComponent } from './studentviewstaff/studentviewstaff.component';
import { StaffhomeComponent } from './staffhome/staffhome.component';
import { StaffaddmeterialsComponent } from './staffaddmeterials/staffaddmeterials.component';
import { AdminaddeventComponent } from './adminaddevent/adminaddevent.component';
import { StudentviewmoreComponent } from './studentviewmore/studentviewmore.component';
import { StudentbookingComponent } from './studentbooking/studentbooking.component';
import { AdminviewbookingComponent } from './adminviewbooking/adminviewbooking.component';
import { UpdatebookingComponent } from './updatebooking/updatebooking.component';
import { ViewissuedbooksComponent } from './viewissuedbooks/viewissuedbooks.component';
import { IssuedComponent } from './issued/issued.component';
import { BookreturnedComponent } from './bookreturned/bookreturned.component';
import { ReturnedComponent } from './returned/returned.component';
import { StudentviewbokingComponent } from './studentviewboking/studentviewboking.component';
import { CancelbookingComponent } from './cancelbooking/cancelbooking.component';
import { StudreturnedComponent } from './studreturned/studreturned.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentregComponent,
    StaffregComponent,
    LoginComponent,
    ViewStudentComponent,
    ViewStaffComponent,
    AddBookComponent,
    AdminviewBookComponent,
    StudentViewBookComponent,
    StaffviewBooksComponent,
    HomeComponent,
    AdminhomeComponent,
    StudenthomeComponent,
    StudentviewstaffComponent,
    StaffhomeComponent,
    StaffaddmeterialsComponent,
    AdminaddeventComponent,
    StudentviewmoreComponent,
    StudentbookingComponent,
    AdminviewbookingComponent,
    UpdatebookingComponent,
    ViewissuedbooksComponent,
    IssuedComponent,
    BookreturnedComponent,
    ReturnedComponent,
    StudentviewbokingComponent,
    CancelbookingComponent,
    StudreturnedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    homerouting,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
