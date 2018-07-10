import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class MyserService {

  constructor(private http:HttpClient) { }
  getdata(url)
  {
    return this.http.get(url);
  }
  postdata(url,data)
  {
    return this.http.post(url,data);
  }

}
