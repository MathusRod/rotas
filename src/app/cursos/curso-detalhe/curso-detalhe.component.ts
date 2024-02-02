import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrl: './curso-detalhe.component.scss',
})
export class CursoDetalheComponent {
  id: number = 0;
  inscricao: Subscription = new Subscription();
  curso: any;

  constructor(
    private route: ActivatedRoute,
    private cursosService: CursoService,
    private router: Router
  ) {
    // this.id = this.route.snapshot.params['id']
  }

  ngOnInit() {
    this.inscricao = this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      this.curso = this.cursosService.getCurso(this.id);

      if (this.curso == null) {
        this.router.navigate(['cursos/naoEncontrado']);
      }
    });
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe();
  }
}
