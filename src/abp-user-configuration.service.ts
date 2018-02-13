import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare var jQuery: any;

@Injectable()
export class AbpUserConfigurationService {

    constructor(private _http: HttpClient) {
        
    }

    initialize(): void {
        this._http.get('/AbpUserConfiguration/GetAll')
            .subscribe(result => {
                jQuery.extend(true, abp, JSON.parse(JSON.stringify(result)));
            });
    }

}