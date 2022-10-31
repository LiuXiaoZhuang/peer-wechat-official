/// <reference types="node" />
import { Util } from '../../util';
import { Readable } from 'stream';
import { OfficialResponse } from '../../types';
import { AccountParam, AccountList, Message } from './types';
export declare class Service {
    private appID;
    private appSecret;
    private util;
    constructor(appID: string, appSecret: string, util: Util);
    addAccount(data: AccountParam): Promise<import("../../types").Response<OfficialResponse, OfficialResponse>>;
    updateAccount(data: AccountParam): Promise<import("../../types").Response<OfficialResponse, OfficialResponse>>;
    delAccount(kfAccount: string): Promise<import("../../types").Response<OfficialResponse, OfficialResponse>>;
    uploadHeadImg(kfAccount: string, fileContent: Readable): Promise<import("../../types").Response<OfficialResponse, OfficialResponse>>;
    accountList(): Promise<import("../../types").Response<AccountList, OfficialResponse>>;
    send(data: Message): Promise<import("../../types").Response<OfficialResponse, OfficialResponse>>;
    typing(openID: string, command: 'Typing' | 'CancelTyping'): Promise<import("../../types").Response<OfficialResponse, OfficialResponse>>;
}
