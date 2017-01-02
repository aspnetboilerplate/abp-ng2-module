import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

declare var jQuery: any;

@Injectable()
export class AbpUserConfigurationService {

    constructor(private _http: Http) {
        
    }

    initialize(): void {
        this._http.get('/AbpUserConfiguration/GetAll')
            .subscribe(result => {
                jQuery.extend(true, abp, result.json());
            });
    }

}