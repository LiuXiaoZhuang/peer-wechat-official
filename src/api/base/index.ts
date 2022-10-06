import { Util } from '../../util'
import { AccessToken, ApiDomainIP } from './types'
import { OfficialResponse } from '../../types'

export class Base {

    constructor(private appID: string, private appSecret: string, private util: Util){}

    /**
     * 获取access_token
     * @returns 
     */
    async getAccessToken(){
        return this.util.request<AccessToken, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/token', {
            method: 'GET',
            params: {
                grant_type: 'client_credential',
                appid: this.appID,
                secret: this.appSecret,
            }
        })
    }

    /**
     * 获取微信服务器ip
     * @returns 
     */
    async getApiDomainIP(){
        return this.util.request<ApiDomainIP, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/get_api_domain_ip', {
            method: 'GET',
            params: {
                access_token: await this.util.accessToken(this.appID)
            }
        })
    }
}