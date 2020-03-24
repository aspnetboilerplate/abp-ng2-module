///<reference path="../../../../../../node_modules/abp-web-resources/Abp/Framework/scripts/abp.d.ts"/>

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SettingService {

    get(name: string): string {
        return abp.setting.get(name);
    }

    getBoolean(name: string): boolean {
        return abp.setting.getBoolean(name);
    }
    
    getInt(name: string): number {
        return abp.setting.getInt(name);
    }

}