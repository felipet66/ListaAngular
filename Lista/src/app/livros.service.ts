import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from './model/livro.model';
import { Injectable } from '@angular/core';
 @Injectable()
export class LivrosService {
  constructor(private httpc: HttpClient) {}
   public getLivros(): Observable<Livro[]> {
    return this.httpc.get<Livro[]>('https://jsonplaceholder.typicode.com/todos/?fbclid=IwAR0T3PMaLjLKZ0gzjNYwqfvMDc3dOvRjnzXRM1LAdksTk2bYVK6j3UICHZE');
  }
}