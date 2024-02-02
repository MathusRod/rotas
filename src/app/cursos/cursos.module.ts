import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterLink, RouterModule } from "@angular/router";

import { CursosComponent } from "./cursos.component";
import { CursoDetalheComponent } from "./curso-detalhe/curso-detalhe.component";
import { CursoNaoEncontradoComponent } from "./curso-nao-encontrado/curso-nao-encontrado.component";
import { CursoService } from "./curso.service";
import { CursosRoutingModule } from "./cursos.routing.module";


@NgModule({
  imports:[
    CommonModule,
    CursosRoutingModule,
    RouterLink,
    RouterModule
  ],
  exports:[],
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent
  ],
  providers: [CursoService],
})
export class CursosModule {}