export interface IValidationErrorInfo {

    message: string;

    members: string[];

}

export interface IErrorInfo {

    code: number;

    message: string;

    details: string;

    validationErrors: IValidationErrorInfo[];

}

export interface IAjaxResponse {

    success: boolean;

    result?: any;

    targetUrl?: string;

    error?: IErrorInfo;

    unAuthorizedRequest: boolean;

    __abp: boolean;

}