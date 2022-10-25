import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})





export class GetapiService {

  constructor(public _http: HttpClient) { }

  getdata<T>(url: string) {

    url = 'https://alternos.sgc-consultores.com.ve/pruebatour/consulta?nombre=Jose%20Perez'
    return this._http.get<T[]>(url);
  }


}


