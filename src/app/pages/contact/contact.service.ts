import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  urlBase: string = environment.api;

  constructor(
    private http: HttpClient
  ) { }

  getCep(cep: string): Observable<any> {
    const url = `${this.urlBase}/${cep}/json/`;
    return this.http.get(url);
  }


}
