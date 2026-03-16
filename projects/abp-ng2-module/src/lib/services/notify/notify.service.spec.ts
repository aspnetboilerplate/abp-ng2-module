import { TestBed } from '@angular/core/testing';
import { NotifyService } from './notify.service';

describe('NotifyService', () => {
    let service: NotifyService;
    const mockNotify = {
        info: jasmine.createSpy('info'),
        success: jasmine.createSpy('success'),
        warn: jasmine.createSpy('warn'),
        error: jasmine.createSpy('error'),
    };

    beforeEach(() => {
        (window as any).abp = { notify: mockNotify };
        Object.values(mockNotify).forEach(spy => (spy as jasmine.Spy).calls.reset());
        TestBed.configureTestingModule({});
        service = TestBed.inject(NotifyService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should call abp.notify.info', () => {
        service.info('msg', 'title');
        expect(mockNotify.info).toHaveBeenCalledWith('msg', 'title', undefined);
    });

    it('should call abp.notify.success', () => {
        service.success('saved');
        expect(mockNotify.success).toHaveBeenCalledWith('saved', undefined, undefined);
    });

    it('should call abp.notify.warn', () => {
        service.warn('careful');
        expect(mockNotify.warn).toHaveBeenCalledWith('careful', undefined, undefined);
    });

    it('should call abp.notify.error', () => {
        service.error('failed');
        expect(mockNotify.error).toHaveBeenCalledWith('failed', undefined, undefined);
    });
});
