import { Util } from '../../util';
import { OfficialResponse } from '../../types';
import { CreateParam, CreateResponse } from './types';
export declare class Qrcode {
    private appID;
    private appSecret;
    private util;
    constructor(appID: string, appSecret: string, util: Util);
    create(data: CreateParam): Promise<import("../../types").Response<CreateResponse, OfficialResponse>>;
    getUrl(ticket: string): string;
}
