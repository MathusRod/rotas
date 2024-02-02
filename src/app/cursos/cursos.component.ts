import { Component } from '@angular/core';
import { CursoService } from './curso.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent {

  cursos: any[] = []
  pagina: number = 0
  inscricao: Subscription = new Subscription

  constructor(private cursosService: CursoService, private route: ActivatedRoute, private router:Router){}

  nextPage(){
    this.router.navigate(['/cursos'], {queryParams: {'pagina': ++this.pagina}})
  }

  ngOnInit(){
    this.cursos = this.cursosService.getCursos()

    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any)=>{
        this.pagina = queryParams['pagina']
      }
    )
  }
  ngOnDestroy(){
    this.inscricao.unsubscribe()
  }
}
