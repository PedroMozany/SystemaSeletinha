import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cad-aluno',
  templateUrl: './cad-aluno.component.html',
  styleUrls: ['./cad-aluno.component.scss']
})
export class CadAlunoComponent implements OnInit {

  name!: string;
  idade!: number;
  escola!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
