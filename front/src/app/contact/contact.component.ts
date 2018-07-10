import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  err_name:string = "Name is required";
  err_len:string = "Allow only alphabate range 3 to 30";
  err_age:string = "Invalid Date";
  
  myData={nam_o:"",age_g:""}
  constructor() { }
  
  submit_value(){
  console.log(this.myData.nam_o);
  }
  
  

  ngOnInit() {
	  
  }
	
	
}
