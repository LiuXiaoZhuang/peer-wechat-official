import { Util } from '../../util';
import { OfficialResponse } from '../../types';
import { AccessToken, UserInfo, JsapiTicket, WxConfig } from './types';
export declare class Web {
    private appID;
    private appSecret;
    private util;
    constructor(appID: string, appSecret: string, util: Util);
    getAuthUrl(redirectUri: string, scope: 'snsapi_base' | 'snsapi_userinfo', state?: string): string;
    accessToken(code: string): Promise<import("../../types").Response<AccessToken, OfficialResponse>>;
    refreshAccessToken(refreshToken: string): Promise<import("../../types").Response<AccessToken, OfficialResponse>>;
    userInfo(accessToken: string, openID: string, lang?: 'zh_CN' | 'zh_TW' | 'en'): Promise<import("../../types").Response<UserInfo, OfficialResponse>>;
    checkAccessToken(accessToken: string, openID: string): Promise<import("../../types").Response<OfficialResponse, OfficialResponse>>;
    getTicket(): Promise<import("../../types").Response<JsapiTicket, OfficialResponse>>;
    getWxConfig(url: string, debug: boolean, jsApiList: string[], openTagList: string[]): Promise<WxConfig>;
}
