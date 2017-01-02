import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

    getCookieValue(key: string): string {
        return abp.utils.getCookieValue(key);
    }

    setCookieValue(key: string, value: string, expireDate?: Date, path?: string): void {
        abp.utils.setCookieValue(key, value, expireDate, path);
    }

    deleteCookie(key: string, path?: string): void {
        abp.utils.deleteCookie(key, path);
    }

}