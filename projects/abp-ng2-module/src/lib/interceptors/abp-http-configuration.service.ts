import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MessageService } from '../services/message/message.service';
import { LogService } from '../services/log/log.service';
import { HttpResponse } from '@angular/common/http';
import { IErrorInfo, IAjaxResponse } from '../models';

@Injectable({
    providedIn: 'root'
})
export class AbpHttpConfigurationService {

    constructor(
        private _messageService: MessageService,
        private _logService: LogService) {
    }

    defaultError = <IErrorInfo>{
        message: 'An error has occurred!',
        details: 'Error details were not sent by server.'
    };

    defaultError401 = <IErrorInfo>{
        message: 'You are not authenticated!',
        details: 'You should be authenticated (sign in) in order to perform this operation.'
    };

    defaultError403 = <IErrorInfo>{
        message: 'You are not authorized!',
        details: 'You are not allowed to perform this operation.'
    };

    defaultError404 = <IErrorInfo>{
        message: 'Resource not found!',
        details: 'The resource requested could not be found on the server.'
    };

    logError(error: IErrorInfo): void {
        this._logService.error(error);
    }

    showError(error: IErrorInfo): any {
        if (error.details) {
            return this._messageService.error(error.details, error.message || this.defaultError.message);
        } else {
            return this._messageService.error(error.message || this.defaultError.message);
        }
    }

    handleTargetUrl(targetUrl: string): void {
        if (!targetUrl) {
            location.href = '/';
        } else {
            location.href = targetUrl;
        }
    }

    handleUnAuthorizedRequest(messagePromise: any, targetUrl?: string) {
        const self = this;

        if (messagePromise) {
            messagePromise.done(() => {
                this.handleTargetUrl(targetUrl || '/');
            });
        } else {
            self.handleTargetUrl(targetUrl || '/');
        }
    }

    handleNonAbpErrorResponse(response: HttpResponse<any>) {
        const self = this;

        switch (response.status) {
            case 401:
                self.handleUnAuthorizedRequest(
                    self.showError(self.defaultError401),
                    '/'
                );
                break;
            case 403:
                self.showError(self.defaultError403);
                break;
            case 404:
                self.showError(self.defaultError404);
                break;
            default:
                self.showError(self.defaultError);
                break;
        }
    }

    handleAbpResponse(response: HttpResponse<any>, ajaxResponse: IAjaxResponse): HttpResponse<any> {
        var newResponse: HttpResponse<any>;

        if (ajaxResponse.success) {

            newResponse = response.clone({
                body: ajaxResponse.result
            });

            if (ajaxResponse.targetUrl) {
                this.handleTargetUrl(ajaxResponse.targetUrl);;
            }
        } else {

            newResponse = response.clone({
                body: ajaxResponse.result
            });

            if (!ajaxResponse.error) {
                ajaxResponse.error = this.defaultError;
            }

            this.logError(ajaxResponse.error);
            this.showError(ajaxResponse.error);

            if (response.status === 401) {
                this.handleUnAuthorizedRequest(null, ajaxResponse.targetUrl);
            }
        }

        return newResponse;
    }

    getAbpAjaxResponseOrNull(response: HttpResponse<any>): IAjaxResponse | null {
        if (!response || !response.headers) {
            return null;
        }

        var contentType = response.headers.get('Content-Type');
        if (!contentType) {
            this._logService.warn('Content-Type is not sent!');
            return null;
        }

        if (contentType.indexOf("application/json") < 0) {
            this._logService.warn('Content-Type is not application/json: ' + contentType);
            return null;
        }

        var responseObj = JSON.parse(JSON.stringify(response.body));
        if (!responseObj.__abp) {
            return null;
        }

        return responseObj as IAjaxResponse;
    }

    handleResponse(response: HttpResponse<any>): HttpResponse<any> {
        var ajaxResponse = this.getAbpAjaxResponseOrNull(response);
        if (ajaxResponse == null) {
            return response;
        }

        return this.handleAbpResponse(response, ajaxResponse);
    }

    blobToText(blob: any): Observable<string> {
        return new Observable<string>((observer: any) => {
            if (!blob) {
                observer.next("");
                observer.complete();
            } else {
                let reader = new FileReader();
                reader.onload = function () {
                    observer.next(this.result);
                    observer.complete();
                }
                reader.readAsText(blob);
            }
        });
    }
}