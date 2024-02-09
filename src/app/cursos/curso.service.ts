import { Injectable } from '@angular/core';
import { Console } from 'console';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  getCursos() {
    return [
      { id: 1, nome: 'Angular 2' },
      { id: 2, nome: 'Java' },
      { id: 3, nome: 'Python' },
      { id: 4, nome: 'C' },
      { id: 5, nome: 'JavaScript' },
      { id: 6, nome: 'C#' },

    ];
  }

  getCurso(id: number) {
    let cursos = this.getCursos();
    for (let i = 0; i < cursos.length; i++) {
      let curso = cursos[i];
      if (curso.id == id) {
        return curso;
      }
    }

    return null;
  }

  constructor() {}
}
