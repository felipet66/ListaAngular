import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from './model/livro.model';
import { Injectable } from '@angular/core';
 @Injectable()
export class LivrosService {
  constructor(private httpc: HttpClient) {}
  public httpOptions = {
      headers: new HttpHeaders({
        // tslint:disable-next-line:max-line-length
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
      })
  };
   public getLivros(): Observable<Livro[]> {
    return this.httpc.get<Livro[]>(
      'http://jsonplaceholder.typicode.com/todos/?fbclid=IwAR0T3PMaLjLKZ0gzjNYwqfvMDc3dOvRjnzXRM1LAdksTk2bYVK6j3UICHZE'
      , this.httpOptions);
  }
}