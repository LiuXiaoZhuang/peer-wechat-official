import { Util } from '../../util';
import { OfficialResponse } from '../../types';
import { SendWithTagParam, SendWithOpenIDParam, SendResponse, SendWithPreviewParam, GetStatus } from './types';
export declare class Message {
    private appID;
    private appSecret;
    private util;
    constructor(appID: string, appSecret: string, util: Util);
    sendWithTag(data: SendWithTagParam): Promise<import("../../types").Response<SendResponse, OfficialResponse>>;
    sendWithOpenID(data: SendWithOpenIDParam): Promise<import("../../types").Response<SendResponse, OfficialResponse>>;
    delete(msgID: number, articleIdx?: number): Promise<import("../../types").Response<OfficialResponse, OfficialResponse>>;
    preview(data: SendWithPreviewParam): Promise<import("../../types").Response<OfficialResponse, OfficialResponse>>;
    getStatus(msgID: number): Promise<import("../../types").Response<GetStatus, OfficialResponse>>;
    setSpeed(speed: number): Promise<import("../../types").Response<OfficialResponse, OfficialResponse>>;
}
