import { Util } from '../../util';
import { OfficialResponse } from '../../types';
import { CreateResponse, AnalysisResponse } from './types';
export declare class ShortKey {
    private appID;
    private appSecret;
    private util;
    constructor(appID: string, appSecret: string, util: Util);
    create(data: string, expireSeconds?: number): Promise<import("../../types").Response<CreateResponse, OfficialResponse>>;
    analysis(shortKey: string): Promise<import("../../types").Response<AnalysisResponse, OfficialResponse>>;
}
