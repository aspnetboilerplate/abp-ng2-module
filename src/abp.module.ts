import { NgModule } from '@angular/core';
import { JsonpModule, XHRBackend, RequestOptions } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AbpSessionService } from './session/abp-session.service';
import { PermissionCheckerService } from './auth/permission-checker.service';
import { FeatureCheckerService } from './features/feature-checker.service';
import { LocalizationService } from './localization/localization.service';
import { SettingService } from './settings/setting.service';
import { NotifyService } from './notify/notify.service';
import { MessageService } from './message/message.service';
import { LogService } from './log/log.service';
import { AbpMultiTenancyService } from './multi-tenancy/abp-multi-tenancy.service';
import { AbpHttpConfiguration } from './abpHttpInterceptor';
import { AbpUserConfigurationService } from './abp-user-configuration.service';
import { TokenService } from './auth/token.service';
import { UtilsService } from './utils/utils.service';

@NgModule({
    imports: [
        HttpClientModule,
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
        TokenService,
        UtilsService
    ]
})
export class AbpModule { }