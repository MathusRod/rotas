import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Router } from '@angular/router';
import { EventEmitter } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  mostrarMenuEmitter = new EventEmitter();

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){
    if(usuario.nome === 'usuario@gmail.com' && usuario.senha === '123456'){
      this.usuarioAutenticado = true

      this.mostrarMenuEmitter.emit(true)

      localStorage.setItem('token', Math.random().toString())

      this.router.navigate(['/'])
    } else {
      this.usuarioAutenticado = false
      
      this.mostrarMenuEmitter.emit(false)

    }
  }

  usuarioEstaAutenticado(){
    return this.usuarioAutenticado;
  }
}
