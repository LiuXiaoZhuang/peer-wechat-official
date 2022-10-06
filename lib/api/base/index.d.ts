import { Util } from '../../util';
import { AccessToken, ApiDomainIP } from './types';
import { OfficialResponse } from '../../types';
export declare class Base {
    private appID;
    private appSecret;
    private util;
    constructor(appID: string, appSecret: string, util: Util);
    getAccessToken(): Promise<import("../../types").Response<AccessToken, OfficialResponse>>;
    getApiDomainIP(): Promise<import("../../types").Response<ApiDomainIP, OfficialResponse>>;
}
