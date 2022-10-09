import { OfficialResponse } from '../../types'

export type AccessToken = {
    kf_account: string,
    access_token: string,
    expires_in: number,
    refresh_token: string,
    openid: string,
    scope: string,
    is_snapshotuser?: number,
}

export type UserInfo = {
    openid: string,
    nickname: string,
    sex: number,
    province: string,
    city: string,
    country: string,
    headimgurl: string,
    privilege: any[],
    unionid: string,
}

export type JsapiTicket = OfficialResponse & {
    ticket: string,
    expires_in: number,
}

export type WxConfig = {
    debug: boolean,
    appId: string,
    timestamp: number,
    nonceStr: string,
    signature: string,
    jsApiList: string[],
    openTagList: string[],
}