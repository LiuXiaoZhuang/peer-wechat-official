import { Util } from '../../util';
import { OfficialResponse } from '../../types';
import { GetIndustry, Add, GetTemplates, SendParam, SendResponse } from './types';
export declare class Template {
    private appID;
    private appSecret;
    private util;
    constructor(appID: string, appSecret: string, util: Util);
    setIndustry(industryID1: string, industryID2: string): Promise<import("../../types").Response<OfficialResponse, OfficialResponse>>;
    getIndustry(): Promise<import("../../types").Response<GetIndustry, OfficialResponse>>;
    add(templateIDShort: string): Promise<import("../../types").Response<Add, Add>>;
    getTemplates(): Promise<import("../../types").Response<GetTemplates, OfficialResponse>>;
    del(templateID: string): Promise<import("../../types").Response<OfficialResponse, OfficialResponse>>;
    send(data: SendParam): Promise<import("../../types").Response<SendResponse, OfficialResponse>>;
}
