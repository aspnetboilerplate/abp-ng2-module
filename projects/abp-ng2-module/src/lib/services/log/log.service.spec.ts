import { TestBed } from '@angular/core/testing';
import { LogService } from './log.service';

describe('LogService', () => {
    let service: LogService;
    const mockLog = {
        debug: jasmine.createSpy('debug'),
        info: jasmine.createSpy('info'),
        warn: jasmine.createSpy('warn'),
        error: jasmine.createSpy('error'),
        fatal: jasmine.createSpy('fatal'),
    };

    beforeEach(() => {
        (window as any).abp = { log: mockLog };
        Object.values(mockLog).forEach(spy => (spy as jasmine.Spy).calls.reset());
        TestBed.configureTestingModule({});
        service = TestBed.inject(LogService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should call abp.log.debug', () => {
        service.debug('debug message');
        expect(mockLog.debug).toHaveBeenCalledWith('debug message');
    });

    it('should call abp.log.info', () => {
        service.info('info message');
        expect(mockLog.info).toHaveBeenCalledWith('info message');
    });

    it('should call abp.log.warn', () => {
        service.warn('warn message');
        expect(mockLog.warn).toHaveBeenCalledWith('warn message');
    });

    it('should call abp.log.error', () => {
        service.error('error message');
        expect(mockLog.error).toHaveBeenCalledWith('error message');
    });

    it('should call abp.log.fatal', () => {
        service.fatal('fatal message');
        expect(mockLog.fatal).toHaveBeenCalledWith('fatal message');
    });
});
