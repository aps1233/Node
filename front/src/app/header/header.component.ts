import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
	base_path = window.location.pathname; // create service of base path

  constructor() { }

  ngOnInit() {
	  
	  console.log(this.base_path);
	  
  }

}
