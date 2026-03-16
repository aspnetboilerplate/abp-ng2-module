import { TestBed } from '@angular/core/testing';
import { FeatureCheckerService } from './feature-checker.service';

describe('FeatureCheckerService', () => {
    let service: FeatureCheckerService;
    const mockFeature = { name: 'App.ChatFeature', value: 'true' };

    beforeEach(() => {
        (window as any).abp = {
            features: {
                get: jasmine.createSpy('get').and.returnValue(mockFeature),
                getValue: jasmine.createSpy('getValue').and.returnValue('true'),
                isEnabled: jasmine.createSpy('isEnabled').and.returnValue(true),
            }
        };
        TestBed.configureTestingModule({});
        service = TestBed.inject(FeatureCheckerService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should get a feature', () => {
        expect(service.get('App.ChatFeature')).toEqual(mockFeature as any);
        expect((window as any).abp.features.get).toHaveBeenCalledWith('App.ChatFeature');
    });

    it('should get a feature value', () => {
        expect(service.getValue('App.ChatFeature')).toBe('true');
        expect((window as any).abp.features.getValue).toHaveBeenCalledWith('App.ChatFeature');
    });

    it('should check if a feature is enabled', () => {
        expect(service.isEnabled('App.ChatFeature')).toBe(true);
        expect((window as any).abp.features.isEnabled).toHaveBeenCalledWith('App.ChatFeature');
    });
});
