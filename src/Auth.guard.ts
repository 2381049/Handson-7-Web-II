import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Observable } from "rxjs";
import { Request } from "express"; // Gunakan express, bukan supertest!

export class AuthGuard implements CanActivate {
    canActivate(
        context: ExecutionContext
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest<Request>(); // Perbaikan titik koma
        const isAuthenticated = request.headers['authorization'] ? true : false; 
        return isAuthenticated;
    }
}
