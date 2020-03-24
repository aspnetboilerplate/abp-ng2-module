///<reference path="../../../../../../node_modules/abp-web-resources/Abp/Framework/scripts/abp.d.ts"/>

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AbpMultiTenancyService {

    get isEnabled(): boolean {
        return abp.multiTenancy.isEnabled;
    }

}