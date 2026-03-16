import { TestBed } from '@angular/core/testing';
import { TokenService } from './token.service';

describe('TokenService', () => {
    let service: TokenService;
    const mockAuth = {
        getToken: jasmine.createSpy('getToken'),
        tokenCookieName: 'token',
        clearToken: jasmine.createSpy('clearToken'),
        setToken: jasmine.createSpy('setToken'),
        getRefreshToken: jasmine.createSpy('getRefreshToken'),
        refreshTokenCookieName: 'refreshToken',
        clearRefreshToken: jasmine.createSpy('clearRefreshToken'),
        setRefreshToken: jasmine.createSpy('setRefreshToken'),
    };

    beforeEach(() => {
        (window as any).abp = { auth: mockAuth };
        mockAuth.getToken.calls.reset();
        mockAuth.clearToken.calls.reset();
        mockAuth.setToken.calls.reset();
        mockAuth.getRefreshToken.calls.reset();
        mockAuth.clearRefreshToken.calls.reset();
        mockAuth.setRefreshToken.calls.reset();

        TestBed.configureTestingModule({});
        service = TestBed.inject(TokenService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should get token', () => {
        mockAuth.getToken.and.returnValue('my-token');
        expect(service.getToken()).toBe('my-token');
    });

    it('should get token cookie name', () => {
        expect(service.getTokenCookieName()).toBe('token');
    });

    it('should clear token', () => {
        service.clearToken();
        expect(mockAuth.clearToken).toHaveBeenCalled();
    });

    it('should set token with expiry', () => {
        const expiry = new Date();
        service.setToken('abc', expiry);
        expect(mockAuth.setToken).toHaveBeenCalledWith('abc', expiry);
    });

    it('should get refresh token', () => {
        mockAuth.getRefreshToken.and.returnValue('refresh-token');
        expect(service.getRefreshToken()).toBe('refresh-token');
    });

    it('should get refresh token cookie name', () => {
        expect(service.getRefreshTokenCookieName()).toBe('refreshToken');
    });

    it('should clear refresh token', () => {
        service.clearRefreshToken();
        expect(mockAuth.clearRefreshToken).toHaveBeenCalled();
    });

    it('should set refresh token', () => {
        service.setRefreshToken('rtoken');
        expect(mockAuth.setRefreshToken).toHaveBeenCalledWith('rtoken', undefined);
    });
});
