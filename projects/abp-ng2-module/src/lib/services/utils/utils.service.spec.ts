import { TestBed } from '@angular/core/testing';
import { UtilsService } from './utils.service';

describe('UtilsService', () => {
    let service: UtilsService;
    const mockUtils = {
        getCookieValue: jasmine.createSpy('getCookieValue').and.returnValue('cookieVal'),
        setCookieValue: jasmine.createSpy('setCookieValue'),
        deleteCookie: jasmine.createSpy('deleteCookie'),
    };

    beforeEach(() => {
        (window as any).abp = { utils: mockUtils };
        Object.values(mockUtils).forEach(spy => (spy as jasmine.Spy).calls.reset());
        TestBed.configureTestingModule({});
        service = TestBed.inject(UtilsService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should get cookie value', () => {
        expect(service.getCookieValue('myKey')).toBe('cookieVal');
        expect(mockUtils.getCookieValue).toHaveBeenCalledWith('myKey');
    });

    it('should set cookie value', () => {
        const expiry = new Date();
        service.setCookieValue('myKey', 'myVal', expiry, '/', 'example.com');
        expect(mockUtils.setCookieValue).toHaveBeenCalledWith('myKey', 'myVal', expiry, '/', 'example.com', undefined);
    });

    it('should delete cookie', () => {
        service.deleteCookie('myKey', '/');
        expect(mockUtils.deleteCookie).toHaveBeenCalledWith('myKey', '/');
    });
});
