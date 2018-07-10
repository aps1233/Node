import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  //post:any;                     // A property for our submitted form // getting all form data
  //e_mail:string = '';
  nameAlert:string = 'Name field is required';
  e_mailAlert:string = 'E-mail is wrong';
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  rForm: FormGroup;
  //name:string = '';
birthday = new Date(1988, 3, 15); // April 15, 1988
   
  
   
  
  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'name': [null, Validators.required],
      //'e_mail': [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500), Validators.pattern(this.emailPattern)])],
	  'e_mail': [null, Validators.compose([Validators.required, Validators.pattern(this.emailPattern)])],
    });

  }

  ngOnInit() {
	
	
  }

  addPost(post) {
    console.log(this.rForm.value.name);
	console.log(this.rForm.value.e_mail);
	//console.log(this.birthday|date);// Pipe will not work in TS 
  }


}
