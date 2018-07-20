import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MyCustomServicesService {

  constructor(private http:HttpClient) { }
  
  getdata(url)
  {
	  //console.log(this.http.get(url));
	 return this.http.get(url);
	 
  }
  
  postdata_newsletter(url,data)
  {
	return this.http.post(url,data); 
  }
}
