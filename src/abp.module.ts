import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule, Http, XHRBackend, RequestOptions } from '@angular/http';

import { AbpSessionService } from './session/abp-session.service';
import { PermissionCheckerService } from './auth/permission-checker.service';
import { FeatureCheckerService } from './features/feature-checker.service';
import { LocalizationService } from './localization/localization.service';
import { SettingService } from './settings/setting.service';
import { NotifyService } from './notify/notify.service';
import { MessageService } from './message/message.service';
import { LogService } from './log/log.service';
import { AbpMultiTenancyService } from './multi-tenancy/abp-multi-tenancy.service';
import { AbpHttpConfiguration, AbpHttp } from './abpHttp';
import { AbpUserConfigurationService } from './abp-user-configuration.service';
import { TokenService } from './auth/token.service';
import { UtilsService } from './utils/utils.service';

export function abpHttpFactory(xhrBackend: XHRBackend, requestOptions: RequestOptions, configuration: AbpHttpConfiguration): Http {
    return new AbpHttp(xhrBackend, requestOptions, configuration);
}

export let ABP_HTTP_PROVIDER = {
    provide: Http,
    useFactory: abpHttpFactory,
    deps: [XHRBackend, RequestOptions, AbpHttpConfiguration]
};

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        JsonpModule
    ],

    declarations: [
    ],

    providers: [
        AbpSessionService,
        PermissionCheckerService,
        FeatureCheckerService,
        LocalizationService,
        SettingService,
        NotifyService,
        MessageService,
        LogService,
        AbpMultiTenancyService,
        AbpUserConfigurationService,
        AbpHttpConfiguration,
        ABP_HTTP_PROVIDER,
        TokenService,
        UtilsService
    ]
})
export class AbpModule { }