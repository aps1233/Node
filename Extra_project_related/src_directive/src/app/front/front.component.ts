import { Component, OnInit } from '@angular/core';
import {MyserService} from '../myser.service';
@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css']
})
export class FrontComponent implements OnInit {
  news:any;
  constructor(private ser:MyserService) { }

  ngOnInit() {
    const url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ece95912ea3746e68826c8eb30e2eb66";
    this.ser.getdata(url)
    .subscribe(res=>this.news=res)
  }

}
