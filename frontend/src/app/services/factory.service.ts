import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FactoryService {

  public usuario : any = {};

  constructor(private http: HttpClient) {
    this.loadUser();
  }

  public loadUser() {
    try {
      this.usuario = JSON.parse(localStorage.getItem('usuario') || '');
    } catch (error) {
      this.usuario = {};
    }
  }

  post(model: string, data: any): any {
    return this.http.post(environment.urlApi + model, data);
  }

  put(model: string, data: any): any {
    return this.http.put(environment.urlApi + model , data);
  }

  delete(model: string): any {
    return this.http.delete(environment.urlApi + model );
  }

  get(model: string): any {
    
    return this.http.get(environment.urlApi + model );
  }
}
