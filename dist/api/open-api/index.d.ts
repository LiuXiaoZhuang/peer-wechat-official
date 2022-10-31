import { Util } from '../../util';
import { OfficialResponse } from '../../types';
import { SearchQuota, SearchRid } from './types';
export declare class OpenApi {
    private appID;
    private appSecret;
    private util;
    constructor(appID: string, appSecret: string, util: Util);
    clearQuota(): Promise<import("../../types").Response<OfficialResponse, OfficialResponse>>;
    getQuota(cgiPath: string): Promise<import("../../types").Response<SearchQuota, SearchQuota>>;
    getRid(rid: string): Promise<import("../../types").Response<SearchRid, SearchRid>>;
}
