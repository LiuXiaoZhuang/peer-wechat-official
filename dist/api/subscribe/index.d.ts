import { Util } from '../../util';
import { OfficialResponse } from '../../types';
import { AddParam, AddResponse, GetCategory, GetKeywords, GetPubTemplates, GetTemplates, Send } from './types';
export declare class Subscribe {
    private appID;
    private appSecret;
    private util;
    constructor(appID: string, appSecret: string, util: Util);
    add(data: AddParam): Promise<import("../../types").Response<AddResponse, AddResponse>>;
    delete(templateID: string): Promise<import("../../types").Response<OfficialResponse, OfficialResponse>>;
    getCategory(): Promise<import("../../types").Response<GetCategory, OfficialResponse>>;
    getKeywords(tid: string): Promise<import("../../types").Response<GetKeywords, OfficialResponse>>;
    getPubTemplates(ids: string, start: number, limit: number): Promise<import("../../types").Response<GetPubTemplates, OfficialResponse>>;
    getTemplates(): Promise<import("../../types").Response<GetTemplates, OfficialResponse>>;
    send(data: Send): Promise<import("../../types").Response<OfficialResponse, OfficialResponse>>;
}
