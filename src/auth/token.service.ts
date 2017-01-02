import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {

    getToken(): string {
        return abp.auth.getToken();
    }

    getTokenCookieName(): string {
        return abp.auth.tokenCookieName;
    }

    clearToken(): void {
        abp.auth.clearToken();
    }

    setToken(authToken: string, expireDate?: Date): void {
        abp.auth.setToken(authToken, expireDate);
    }

}