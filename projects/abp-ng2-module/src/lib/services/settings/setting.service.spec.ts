import { TestBed } from '@angular/core/testing';
import { SettingService } from './setting.service';

describe('SettingService', () => {
    let service: SettingService;

    beforeEach(() => {
        (window as any).abp = {
            setting: {
                get: jasmine.createSpy('get').and.returnValue('value1'),
                getBoolean: jasmine.createSpy('getBoolean').and.returnValue(true),
                getInt: jasmine.createSpy('getInt').and.returnValue(42),
            }
        };
        TestBed.configureTestingModule({});
        service = TestBed.inject(SettingService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should get a setting value', () => {
        expect(service.get('App.Theme')).toBe('value1');
        expect((window as any).abp.setting.get).toHaveBeenCalledWith('App.Theme');
    });

    it('should get a boolean setting', () => {
        expect(service.getBoolean('App.Enabled')).toBe(true);
        expect((window as any).abp.setting.getBoolean).toHaveBeenCalledWith('App.Enabled');
    });

    it('should get an integer setting', () => {
        expect(service.getInt('App.PageSize')).toBe(42);
        expect((window as any).abp.setting.getInt).toHaveBeenCalledWith('App.PageSize');
    });
});
