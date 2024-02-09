import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RouterLink, RouterModule } from '@angular/router';
import { AuthService } from './login/auth.service';
import { FormsModule } from '@angular/forms';
import { AuthGuard } from './guards/auth-guard.service';
import { CursosGuard } from './guards/cursos.guard';
import { AlunosGuard } from './guards/alunos.guard';
import { AlunosDeactivateGuard } from './guards/alunos-deactivate.guard';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';
// import { CursosModule } from './cursos/cursos.module';
// import { AlunosModule } from './alunos/alunos.module';

@NgModule({
  declarations: [AppComponent, HomeComponent, LoginComponent, PaginaNaoEncontradaComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterLink,
    // CursosModule,
    // AlunosModule,
    RouterModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration(),
    AuthService,
    AuthGuard,
    CursosGuard,
    AlunosGuard,
    AlunosDeactivateGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
