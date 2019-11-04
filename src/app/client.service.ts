import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IClientModel } from './i-client-model';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<IClientModel[]>("http://localhost:55555/api/clients");
  }
}
