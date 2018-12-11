import { Component, OnInit } from '@angular/core';
import { LivrosService } from '../livros.service';
import { Livro } from '../model/livro.model';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.scss'],
  providers: [ LivrosService ]
})
export class LivroComponent implements OnInit {

  public livro: Livro[];
  
  constructor(private livrosService: LivrosService) { }

  ngOnInit() {
    this.onSubscribe();
  }

  onSubscribe() {
    this.livrosService.getLivros().subscribe(result => {
      console.log(result);
      this.livro = result;
    });
  }
}
