import { Component} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AlunosService } from '../alunos.service';
import { IFormCanDeactivate } from '../../guards/iform-candeactivate';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrl: './aluno-form.component.scss'
})
export class AlunoFormComponent implements IFormCanDeactivate {
  
  aluno: any;
  inscricao: Subscription = new Subscription;
  private formMudou: boolean = false

  constructor(private route: ActivatedRoute, private alunosService: AlunosService){}

  ngOnInit(){
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.aluno = this.alunosService.getAluno(id);

        if (this.aluno === null){
          this.aluno = {}
        }
      }
    )
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  onInput(){
    console.log("olaaaaaaa")
    this.formMudou = true
  }

  podeMudarRota(){
    if(this.formMudou){
      confirm('Tem certeza que deseja sair dessa página?')
    }
    return true
  }

  podeDesativar() {
      this.podeMudarRota()
  }
}
