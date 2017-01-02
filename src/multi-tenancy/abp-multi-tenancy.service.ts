import { Injectable } from '@angular/core';

@Injectable()
export class AbpMultiTenancyService {

    get isEnabled(): boolean {
        return abp.multiTenancy.isEnabled;
    }

}