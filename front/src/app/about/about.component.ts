import { Component, OnInit } from '@angular/core';
import {MyCustomServicesService} from '../Services/my-custom-services.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
news:any;
  constructor(private ser:MyCustomServicesService) { }

  ngOnInit() {
	const url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ece95912ea3746e68826c8eb30e2eb66";
	this.ser.getdata(url)
	.subscribe(res=>this.news=res)
  
  }

}
