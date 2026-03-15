import { TestBed } from '@angular/core/testing';
import { LocalizationService } from './localization.service';

describe('LocalizationService', () => {
    let service: LocalizationService;
    const languages = [{ name: 'en', displayName: 'English' }];
    const currentLanguage = { name: 'en', displayName: 'English' };

    beforeEach(() => {
        (window as any).abp = {
            localization: {
                languages,
                currentLanguage,
                localize: jasmine.createSpy('localize').and.returnValue('Hello'),
                getSource: jasmine.createSpy('getSource').and.returnValue((...key: string[]) => key[0]),
            }
        };
        TestBed.configureTestingModule({});
        service = TestBed.inject(LocalizationService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should return languages', () => {
        expect(service.languages).toEqual(languages as any);
    });

    it('should return current language', () => {
        expect(service.currentLanguage).toEqual(currentLanguage as any);
    });

    it('should localize a key', () => {
        expect(service.localize('Hello', 'MyApp')).toBe('Hello');
        expect((window as any).abp.localization.localize).toHaveBeenCalledWith('Hello', 'MyApp');
    });

    it('should get a localization source', () => {
        const source = service.getSource('MyApp');
        expect(source).toBeDefined();
        expect((window as any).abp.localization.getSource).toHaveBeenCalledWith('MyApp');
    });
});
