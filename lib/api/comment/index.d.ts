import { Util } from '../../util';
import { OfficialResponse } from '../../types';
import { ListParam, ListResponse, ActionCommentParam, ReplyCommentParam } from './types';
export declare class Comment {
    private appID;
    private appSecret;
    private util;
    constructor(appID: string, appSecret: string, util: Util);
    open(msgDataID: number, index?: number): Promise<import("../../types").Response<OfficialResponse, OfficialResponse>>;
    close(msgDataID: number, index?: number): Promise<import("../../types").Response<OfficialResponse, OfficialResponse>>;
    list(data: ListParam): Promise<import("../../types").Response<ListResponse, OfficialResponse>>;
    markElect(data: ActionCommentParam): Promise<import("../../types").Response<OfficialResponse, OfficialResponse>>;
    unMarkElect(data: ActionCommentParam): Promise<import("../../types").Response<OfficialResponse, OfficialResponse>>;
    delete(data: ActionCommentParam): Promise<import("../../types").Response<OfficialResponse, OfficialResponse>>;
    reply(data: ReplyCommentParam): Promise<import("../../types").Response<OfficialResponse, OfficialResponse>>;
    deleteReply(data: ActionCommentParam): Promise<import("../../types").Response<OfficialResponse, OfficialResponse>>;
}
