import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})




export class RestService {

  constructor(public http: HttpClient) { }

  public get(url: string) {

    return this.http.get(url);

  }

  public enviarData(url: string, body) {

    return this.http.post(url, body);
  }

  }



