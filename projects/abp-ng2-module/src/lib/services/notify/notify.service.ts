///<reference path="../../../../../../node_modules/abp-web-resources/Abp/Framework/scripts/abp.d.ts"/>

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class NotifyService {

    info(message: string, title?: string, options?: any): void {
        abp.notify.info(message, title, options);
    }

    success(message: string, title?: string, options?: any): void {
        abp.notify.success(message, title, options);
    }

    warn(message: string, title?: string, options?: any): void {
        abp.notify.warn(message, title, options);
    }

    error(message: string, title?: string, options?: any): void {
        abp.notify.error(message, title, options);
    }

}