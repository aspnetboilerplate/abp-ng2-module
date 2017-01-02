import { Injectable } from '@angular/core';

@Injectable()
export class FeatureCheckerService {

    get(featureName: string): abp.features.IFeature {
        return abp.features.get(featureName);
    }

    getValue(featureName: string): string {
        return abp.features.getValue(featureName);
    }

    isEnabled(featureName: string): boolean {
        return abp.features.isEnabled(featureName);
    }

}