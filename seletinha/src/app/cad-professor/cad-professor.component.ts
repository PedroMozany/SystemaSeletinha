import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm,Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-cad-professor',
  templateUrl: './cad-professor.component.html',
  styleUrls: ['./cad-professor.component.scss']
})
export class CadProfessorComponent implements OnInit {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();
  senha!: string;
  nome!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
