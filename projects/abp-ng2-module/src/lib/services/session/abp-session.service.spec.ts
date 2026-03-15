import { TestBed } from '@angular/core/testing';
import { AbpSessionService } from './abp-session.service';

describe('AbpSessionService', () => {
    let service: AbpSessionService;

    beforeEach(() => {
        (window as any).abp = {
            session: {
                userId: 42,
                tenantId: 1,
                impersonatorUserId: undefined,
                impersonatorTenantId: undefined,
                multiTenancySide: 2
            }
        };
        TestBed.configureTestingModule({});
        service = TestBed.inject(AbpSessionService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return userId', () => {
        expect(service.userId).toBe(42);
    });

    it('should return tenantId', () => {
        expect(service.tenantId).toBe(1);
    });

    it('should return undefined impersonatorUserId when not impersonating', () => {
        expect(service.impersonatorUserId).toBeUndefined();
    });

    it('should return undefined impersonatorTenantId when not impersonating', () => {
        expect(service.impersonatorTenantId).toBeUndefined();
    });

    it('should return multiTenancySide', () => {
        expect(service.multiTenancySide).toBe(2);
    });
});
