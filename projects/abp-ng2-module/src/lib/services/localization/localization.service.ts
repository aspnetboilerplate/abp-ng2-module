///<reference path="../../../../../../node_modules/abp-web-resources/Abp/Framework/scripts/abp.d.ts"/>

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LocalizationService {

    get languages(): abp.localization.ILanguageInfo[] {
        return abp.localization.languages;
    }

    get currentLanguage(): abp.localization.ILanguageInfo {
        return abp.localization.currentLanguage;
    }

    localize(key: string, sourceName: string): string {
        return abp.localization.localize(key, sourceName);
    }
    
    getSource(sourceName: string): (...key: string[]) => string {
        return abp.localization.getSource(sourceName);
    }

}