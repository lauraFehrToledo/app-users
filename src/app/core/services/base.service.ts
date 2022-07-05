import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
  export class  BaseService { 

    constructor(
      public http: HttpClient
    ) { }

    public realizarPeticionPost(url: string, params?: any): Observable<any> {
      params = JSON.stringify(params);
  
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
  
      return this.http.post(url, params, { headers: headers, withCredentials: true });
    }

    public realizarPeticionPut(url: string, params?: any): Observable<any> {
      params = JSON.stringify(params);
  
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
  
      return this.http.put(url, params, { headers: headers, withCredentials: true });
    }

    public realizarPeticionGet(url: string): Observable<any> {
      const headers = new HttpHeaders().set('Content-Type', 'application/json');
  
      return this.http.get(url, { headers: headers, withCredentials: true });
    }

    public realizarPeticionDelete(url: string): Observable<any> {
      return this.http.delete(url, { withCredentials: true });
    }

  }
  