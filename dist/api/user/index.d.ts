import { Util } from '../../util';
import { OfficialResponse } from '../../types';
import { Language, BatchUserInfoParam, BatchUserInfoResponse, ListResponse } from './types';
export declare class User {
    private appID;
    private appSecret;
    private util;
    constructor(appID: string, appSecret: string, util: Util);
    updateRemark(openID: string, remark: string): Promise<import("../../types").Response<OfficialResponse, OfficialResponse>>;
    userInfo(openID: string, lang?: Language): Promise<import("../../types").Response<OfficialResponse, OfficialResponse>>;
    batchUserInfo(data: BatchUserInfoParam): Promise<import("../../types").Response<BatchUserInfoResponse, OfficialResponse>>;
    list(nextOpenID?: string): Promise<import("../../types").Response<ListResponse, OfficialResponse>>;
}
