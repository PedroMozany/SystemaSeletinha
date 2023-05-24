import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cad-aluno',
  templateUrl: './cad-aluno.component.html',
  styleUrls: ['./cad-aluno.component.scss']
})
export class CadAlunoComponent implements OnInit {

  name!: string;
  idade!: number;
  idAluno!: number;

  constructor(private http: HttpClient) { }

  casdastro(){

  }

  ngOnInit(): void {
  }

}
