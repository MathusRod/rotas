import { Component } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { AlunosService } from '../alunos.service';
import { Subscription } from 'rxjs';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrl: './aluno-detalhe.component.scss'
})
export class AlunoDetalheComponent{
  
  aluno: Aluno;
  inscricao: Subscription = new Subscription;

  constructor(private route: ActivatedRoute, private router: Router, private alunosService: AlunosService){}

  ngOnInit(){
    // this.inscricao = this.route.params.subscribe(
    //   (params: any) => {
    //     let id = params['id'];

    //     this.aluno = this.alunosService.getAluno(id);
    //   }
    // )
    console.log("ngOnInit: AlunoDetalheComponent")
    this.inscricao = this.route.data.subscribe(
      (info)=>{
        console.log("Recebendo o obj aluno")
        this.aluno = info['aluno']
      }
    )
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  editarContato(){
    this.router.navigate(['/alunos', this.aluno.id, 'editar'])
  }
}
