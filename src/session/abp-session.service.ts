import { Injectable } from '@angular/core';

@Injectable()
export class AbpSessionService {

    get userId(): number {
        return abp.session.userId;
    }

    get tenantId(): number {
        return abp.session.tenantId;
    }

    get impersonatorUserId(): number {
        return abp.session.impersonatorUserId;
    }

    get impersonatorTenantId(): number {
        return abp.session.impersonatorTenantId;
    }

    get multiTenancySide(): abp.multiTenancy.sides {
        return abp.session.multiTenancySide;
    }

}