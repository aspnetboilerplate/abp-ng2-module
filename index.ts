import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { HttpModule, JsonpModule, Http, XHRBackend, RequestOptions } from '@angular/http';

import { AbpSessionService } from './src/session/abp-session.service';
import { PermissionCheckerService } from './src/auth/permission-checker.service';
import { FeatureCheckerService } from './src/features/feature-checker.service';
import { LocalizationService } from './src/localization/localization.service';
import { SettingService } from './src/settings/setting.service';
import { NotifyService } from './src/notify/notify.service';
import { MessageService } from './src/message/message.service';
import { LogService } from './src/log/log.service';
import { AbpMultiTenancyService } from './src/multi-tenancy/abp-multi-tenancy.service';
import { TokenService } from './src/auth/token.service';
import { UtilsService } from './src/utils/utils.service';
import { AbpHttpConfiguration, AbpHttp } from './src/abpHttp';
import { AbpUserConfigurationService } from './src/abp-user-configuration.service';

export * from './src/session/abp-session.service';
export * from './src/auth/permission-checker.service';
export * from './src/features/feature-checker.service';
export * from './src/localization/localization.service';
export * from './src/settings/setting.service';
export * from './src/notify/notify.service';
export * from './src/message/message.service';
export * from './src/log/log.service';
export * from './src/multi-tenancy/abp-multi-tenancy.service';
export * from './src/auth/token.service';
export * from './src/utils/utils.service';
export * from './src/abpHttp';
export * from './src/abp-user-configuration.service';

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
    ]
})
export class AbpModule { 
    static forRoot(): ModuleWithProviders {
    return {
      ngModule: AbpModule,
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
    };
  }
}