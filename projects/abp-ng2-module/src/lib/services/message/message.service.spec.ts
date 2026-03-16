import { TestBed } from '@angular/core/testing';
import { MessageService } from './message.service';

describe('MessageService', () => {
    let service: MessageService;
    const mockMessage = {
        info: jasmine.createSpy('info'),
        success: jasmine.createSpy('success'),
        warn: jasmine.createSpy('warn'),
        error: jasmine.createSpy('error'),
        confirm: jasmine.createSpy('confirm'),
    };

    beforeEach(() => {
        (window as any).abp = { message: mockMessage };
        Object.values(mockMessage).forEach(spy => (spy as jasmine.Spy).calls.reset());
        TestBed.configureTestingModule({});
        service = TestBed.inject(MessageService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should call abp.message.info', () => {
        service.info('msg', 'title');
        expect(mockMessage.info).toHaveBeenCalledWith('msg', 'title', undefined);
    });

    it('should call abp.message.success', () => {
        service.success('done');
        expect(mockMessage.success).toHaveBeenCalledWith('done', undefined, undefined);
    });

    it('should call abp.message.warn', () => {
        service.warn('watch out');
        expect(mockMessage.warn).toHaveBeenCalledWith('watch out', undefined, undefined);
    });

    it('should call abp.message.error', () => {
        service.error('oops');
        expect(mockMessage.error).toHaveBeenCalledWith('oops', undefined, undefined);
    });

    it('should call abp.message.confirm with callback', () => {
        const cb = jasmine.createSpy('callback');
        service.confirm('Are you sure?', 'Confirm', cb);
        expect(mockMessage.confirm).toHaveBeenCalledWith('Are you sure?', 'Confirm', cb, undefined);
    });
});
