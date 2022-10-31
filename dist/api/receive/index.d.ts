import { Util } from '../../util';
import { ReceiveData } from './types';
export declare class Receive {
    private appID;
    private appSecret;
    private util;
    constructor(appID: string, appSecret: string, util: Util);
    checkAccess(token: string, timestamp: string, nonce: string, signature: string): boolean;
    decryptMessage(body: any, encryptType?: string, token?: string, encodingAESKey?: string): Promise<ReceiveData>;
}
