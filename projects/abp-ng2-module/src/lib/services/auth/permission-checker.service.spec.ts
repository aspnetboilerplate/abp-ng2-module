import { TestBed } from '@angular/core/testing';
import { PermissionCheckerService } from './permission-checker.service';

describe('PermissionCheckerService', () => {
    let service: PermissionCheckerService;

    beforeEach(() => {
        (window as any).abp = {
            auth: {
                isGranted: jasmine.createSpy('isGranted')
            }
        };
        TestBed.configureTestingModule({});
        service = TestBed.inject(PermissionCheckerService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return true when permission is granted', () => {
        (window as any).abp.auth.isGranted.and.returnValue(true);
        expect(service.isGranted('Pages.Users')).toBe(true);
        expect((window as any).abp.auth.isGranted).toHaveBeenCalledWith('Pages.Users');
    });

    it('should return false when permission is not granted', () => {
        (window as any).abp.auth.isGranted.and.returnValue(false);
        expect(service.isGranted('Pages.Admin')).toBe(false);
    });
});
