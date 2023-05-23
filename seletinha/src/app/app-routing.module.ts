import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './professor/home/home.component';
import { CadAlunoComponent } from './professor/cad-aluno/cad-aluno.component';
import { CadAtividadeComponent } from './professor/cad-atividade/cad-atividade.component';

const routes: Routes = [{
  path: '',
  redirectTo: 'home',
  pathMatch: "full"
},{
  path: 'home',
  component: HomeComponent
},{
  path: 'cadastroAluno',
  component: CadAlunoComponent
},{
  path: 'cadastroAtividade',
  component: CadAtividadeComponent
},{
  path: '**',
  redirectTo: '/home'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
