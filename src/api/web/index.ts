import { Util } from '../../util'
import { OfficialResponse } from '../../types'
import { AccessToken, UserInfo, JsapiTicket, WxConfig } from './types'
import * as crypto from 'crypto';

export class Web {

    constructor(private appID: string, private appSecret: string, private util: Util){}

    /**
     * 
     * @returns 
     */
    getAuthUrl(redirectUri: string, scope: 'snsapi_base' | 'snsapi_userinfo', state?: string): string{
        return `https://open.weixin.qq.com/connect/oauth2/authorize?appid=${this.appID}&redirect_uri=${redirectUri}&response_type=code&scope=${scope}&state=${state}#wechat_redirect`
    }

    /**
     * 获取网页授权access_token
     * @returns 
     */
     async accessToken(code: string){
        return this.util.request<AccessToken, OfficialResponse>('https://api.weixin.qq.com/sns/oauth2/access_token', {
            method: 'GET',
            params: {
                appid: this.appID,
                secret: this.appSecret,
                code: code,
                grant_type: 'authorization_code',
            }
        })
    }

    /**
     * 刷新网页授权access_token
     * @returns 
     */
     async refreshAccessToken(refreshToken: string){
        return this.util.request<AccessToken, OfficialResponse>('https://api.weixin.qq.com/sns/oauth2/refresh_token', {
            method: 'GET',
            params: {
                appid: this.appID,
                grant_type: 'refresh_token',
                refresh_token: refreshToken,
            }
        })
    }

    /**
     * 获取用户信息
     * @returns 
     */
     async userInfo(accessToken: string, openID: string, lang: 'zh_CN' | 'zh_TW' | 'en' = 'zh_CN'){
        return this.util.request<UserInfo, OfficialResponse>('https://api.weixin.qq.com/sns/userinfo', {
            method: 'GET',
            params: {
                access_token: accessToken,
                openid: openID,
                lang: lang,
            }
        })
    }

    /**
     * 检验授权凭证（access_token）是否有效
     * @returns 
     */
     async checkAccessToken(accessToken: string, openID: string){
        return this.util.request<OfficialResponse, OfficialResponse>('https://api.weixin.qq.com/sns/auth', {
            method: 'GET',
            params: {
                access_token: accessToken,
                openid: openID,
            }
        })
    }

    /**
     * 获取jsapi_ticket
     * @returns 
     */
     async getTicket(){
        return this.util.request<JsapiTicket, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/ticket/getticket', {
            method: 'GET',
            params: {
                access_token: await this.util.accessToken(this.appID),
                type: 'jsapi'
            }
        })
    }
    
    /**
     * 获取jssdk 配置
     * @param url 
     * @param debug 
     * @param jsApiList 
     * @param openTagList 
     * @returns 
     */
    async getWxConfig(url: string, debug: boolean = false, jsApiList: string[] = [], openTagList: string[]): Promise<WxConfig>{
        let noncestr = this.util.randStr(16)
        let jsapiTicket = await this.util.jsapiTicket(this.appID)
        let timestamp = parseInt(Math.round(new Date().valueOf() / 1000).toFixed(0))
        let signParam: string[] = [
            `jsapi_ticket=${jsapiTicket}`,
            `noncestr=${noncestr}`,
            `timestamp=${timestamp}`,
            `url=${url}`,
        ]
        let shaSum = crypto.createHash('sha1');
        shaSum.update(signParam.join('&'));
        return {
            debug: debug,
            appId: this.appID,
            timestamp: timestamp, // 必填，生成签名的时间戳
            nonceStr: noncestr, // 必填，生成签名的随机串
            signature: shaSum.digest('hex'),
            jsApiList: jsApiList, // 必填，需要使用的 JS 接口列表
            openTagList: openTagList
        }
    }
}