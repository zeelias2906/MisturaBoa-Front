import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, of } from 'rxjs';
import { InfoUsuario } from '../models/info-usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {

  decodedToken$!: Observable<any>;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router
  ) {}

  private get localStorage() {
    return this.document.defaultView?.localStorage;
  }

  getToken() {
    if (this.localStorage) {
      return this.localStorage.getItem('token');
    }
    return null;
  }

  getIdUsuario() {
    return this.decodePayloadJWT()?.decode.id;
  }

  getInfoUsuario() : InfoUsuario | null {
    const name = this.decodePayloadJWT()?.decode.name;
    if (!name) return null;
    const splittedName = name.split(' ');

    let nameProcess = `${splittedName[0]} ${
      splittedName.length >= 2 ? splittedName.pop() : ''
    }`;

    return{
      id: this.decodePayloadJWT()?.decode.id,
      name: nameProcess,
      email: this.decodePayloadJWT()?.decode.sub,  
      role: this.decodePayloadJWT()?.decode.role 
    } as InfoUsuario

  }

  logout() {
    if (this.localStorage) {
      this.localStorage.removeItem('token');
      this.decodedToken$ = {} as Observable<any>;
    }
    return null;
  }

  isTokenValid() {
    const token = this.getToken();

    if (token) {
      const helper = new JwtHelperService();

      const isExpired = helper.isTokenExpired(this.getToken());

      if (isExpired) {
        return null;
      }
    }
    return token;
  }

  decodePayloadJWT() {
    const token = this.getToken();

    if (token) {
      const helper = new JwtHelperService();

      const decodedToken = helper.decodeToken(token);
      const expirationDate = helper.getTokenExpirationDate(token);
      const isExpired = helper.isTokenExpired(this.getToken());

      if (isExpired) {
        this.router.navigateByUrl('/');
        return null;
      }
      this.decodedToken$ = of(decodedToken);
      return {
        decode: decodedToken,
        expire: expirationDate,
        isExpired: isExpired,
      };
    } else {
      this.router.navigateByUrl('/');
      return null;
    }
  }
}
