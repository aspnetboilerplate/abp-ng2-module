import { Injectable } from '@angular/core';

@Injectable()
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