import { Util } from '../../util';
import { OfficialResponse } from '../../types';
import { ListResponse } from './types';
export declare class UserBlack {
    private appID;
    private appSecret;
    private util;
    constructor(appID: string, appSecret: string, util: Util);
    list(beginOpenID?: string): Promise<import("../../types").Response<ListResponse, OfficialResponse>>;
    black(openIDs: string[]): Promise<import("../../types").Response<OfficialResponse, OfficialResponse>>;
    cancelBlack(openIDs: string[]): Promise<import("../../types").Response<OfficialResponse, OfficialResponse>>;
}
