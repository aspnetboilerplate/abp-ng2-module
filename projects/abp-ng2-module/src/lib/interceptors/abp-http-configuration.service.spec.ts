import { TestBed } from '@angular/core/testing';
import { HttpResponse, HttpHeaders } from '@angular/common/http';
import { AbpHttpConfigurationService } from './abp-http-configuration.service';
import { MessageService } from '../services/message/message.service';
import { LogService } from '../services/log/log.service';

describe('AbpHttpConfigurationService', () => {
    let service: AbpHttpConfigurationService;
    let messageService: jasmine.SpyObj<MessageService>;
    let logService: jasmine.SpyObj<LogService>;

    beforeEach(() => {
        messageService = jasmine.createSpyObj('MessageService', ['error', 'info', 'success', 'warn', 'confirm']);
        logService = jasmine.createSpyObj('LogService', ['error', 'warn', 'info', 'debug', 'fatal']);

        TestBed.configureTestingModule({
            providers: [
                AbpHttpConfigurationService,
                { provide: MessageService, useValue: messageService },
                { provide: LogService, useValue: logService },
            ]
        });
        service = TestBed.inject(AbpHttpConfigurationService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('showError', () => {
        it('should show error with details when details exist', () => {
            service.showError({ code: 0, message: 'Error', details: 'Details here', validationErrors: [] });
            expect(messageService.error).toHaveBeenCalledWith('Details here', 'Error');
        });

        it('should show error message only when no details', () => {
            service.showError({ code: 0, message: 'Something went wrong', details: '', validationErrors: [] });
            expect(messageService.error).toHaveBeenCalledWith('Something went wrong');
        });

        it('should use default error message when message is empty', () => {
            service.showError({ code: 0, message: '', details: '', validationErrors: [] });
            expect(messageService.error).toHaveBeenCalledWith(service.defaultError.message);
        });
    });

    describe('logError', () => {
        it('should log the error', () => {
            const error = { code: 0, message: 'err', details: '', validationErrors: [] };
            service.logError(error);
            expect(logService.error).toHaveBeenCalledWith(error);
        });
    });

    describe('getAbpAjaxResponseOrNull', () => {
        it('should return null when response has no headers', () => {
            const response = new HttpResponse({ body: null });
            // @ts-ignore
            expect(service.getAbpAjaxResponseOrNull(null)).toBeNull();
        });

        it('should return null when content-type is missing', () => {
            const response = new HttpResponse({ body: {} });
            expect(service.getAbpAjaxResponseOrNull(response)).toBeNull();
            expect(logService.warn).toHaveBeenCalled();
        });

        it('should return null when content-type is not application/json', () => {
            const response = new HttpResponse({
                body: {},
                headers: new HttpHeaders({ 'Content-Type': 'text/html' })
            });
            expect(service.getAbpAjaxResponseOrNull(response)).toBeNull();
            expect(logService.warn).toHaveBeenCalled();
        });

        it('should return null when response body has no __abp flag', () => {
            const response = new HttpResponse({
                body: { result: 'data' },
                headers: new HttpHeaders({ 'Content-Type': 'application/json' })
            });
            expect(service.getAbpAjaxResponseOrNull(response)).toBeNull();
        });

        it('should return IAjaxResponse when __abp flag is true', () => {
            const body = { __abp: true, success: true, result: 'data' };
            const response = new HttpResponse({
                body,
                headers: new HttpHeaders({ 'Content-Type': 'application/json' })
            });
            const result = service.getAbpAjaxResponseOrNull(response);
            expect(result).not.toBeNull();
            expect(result!.success).toBe(true);
        });
    });

    describe('handleAbpResponse', () => {
        it('should clone response with result body on success', () => {
            const body = { __abp: true, success: true, result: { id: 1 } };
            const response = new HttpResponse({
                body,
                headers: new HttpHeaders({ 'Content-Type': 'application/json' })
            });
            const newResponse = service.handleAbpResponse(response, body as any);
            expect(newResponse.body).toEqual({ id: 1 });
        });

        it('should log and show error on failure', () => {
            const body = { __abp: true, success: false, error: { message: 'Bad request', details: '' }, result: null };
            const response = new HttpResponse({ status: 400, body });
            const newResponse = service.handleAbpResponse(response, body as any);
            expect(logService.error).toHaveBeenCalled();
            expect(messageService.error).toHaveBeenCalled();
        });
    });

    describe('blobToText', () => {
        it('should emit empty string for falsy blob', (done) => {
            service.blobToText(null).subscribe(result => {
                expect(result).toBe('');
                done();
            });
        });
    });
});
