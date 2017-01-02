import { Injectable } from '@angular/core';

@Injectable()
export class LogService {

    debug(logObject?: any): void {
        abp.log.debug(logObject);
    }

    info(logObject?: any): void {
        abp.log.info(logObject);
    }

    warn(logObject?: any): void {
        abp.log.warn(logObject);
    }

    error(logObject?: any): void {
        abp.log.error(logObject);
    }

    fatal(logObject?: any): void {
        abp.log.fatal(logObject);
    }

}