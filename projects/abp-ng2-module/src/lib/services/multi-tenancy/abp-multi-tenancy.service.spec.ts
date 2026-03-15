import { TestBed } from '@angular/core/testing';
import { AbpMultiTenancyService } from './abp-multi-tenancy.service';

describe('AbpMultiTenancyService', () => {
    let service: AbpMultiTenancyService;

    beforeEach(() => {
        (window as any).abp = {
            multiTenancy: { isEnabled: true }
        };
        TestBed.configureTestingModule({});
        service = TestBed.inject(AbpMultiTenancyService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return true when multi-tenancy is enabled', () => {
        expect(service.isEnabled).toBe(true);
    });

    it('should return false when multi-tenancy is disabled', () => {
        (window as any).abp.multiTenancy.isEnabled = false;
        expect(service.isEnabled).toBe(false);
    });
});
