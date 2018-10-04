import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private data: Data[];

  constructor(private httpClient: HttpClient) { 
    this.httpClient.get<Data[]>('assets/data.json')
      .subscribe( data => this.data = data);
  }

  getData(): Data[] {
    return this.data;
  }

}
