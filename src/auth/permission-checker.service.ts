import { Injectable } from '@angular/core';

@Injectable()
export class PermissionCheckerService {

    isGranted(permissionName: string): boolean {
        return abp.auth.isGranted(permissionName);
    }

}