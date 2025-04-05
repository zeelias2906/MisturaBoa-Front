import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthTokenService } from '../../../../shared/services/auth-token.service';
import { InfoUsuario } from '../../../../shared/models/info-usuario.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  logado: boolean = true
  usuario: InfoUsuario | null = null

  constructor(private route: Router, private authTokenService: AuthTokenService){}

  ngOnInit(): void {
      this.logado = true
      this._validateToken()
  }

  logout(){
    this.logado = true
    this.authTokenService.logout()
    this._validateToken()
    
  }
  
  goToLogin() {
    this.route.navigate(['login/'])
  }

  goToProduto() {
    this.route.navigate(['administrador/produto'])
  }

  goToCategoria() {
    this.route.navigate(['administrador/categoria'])
  }

  private _validateToken(){
    if(this.authTokenService.decodePayloadJWT() != null && !this.authTokenService.decodePayloadJWT()?.isExpired){
      this.logado = !this.logado
      this.usuario = this.authTokenService.getInfoUsuario()
    }
  }

}
