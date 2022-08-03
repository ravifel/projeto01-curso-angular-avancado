import { Injectable } from "@angular/core";
import { CanActivate, CanLoad, Route, UrlSegment } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard implements CanLoad, CanActivate {

    user = { admin: true, logged: true }

    canLoad(): boolean {
        //simular um usuario
        //se o usuario não for admin ele não vai carregar
        return this.user.admin;
    }

    canActivate(): boolean {
        //o usuario poder ser admin, mas se o "logged" estiver false, ele não vai logar.
        return this.user.logged;
    }

}