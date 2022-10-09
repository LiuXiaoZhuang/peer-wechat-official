import { Util } from '../../util'
import { OfficialResponse } from '../../types'
import {
    ListResponse,
} from './types'

export class UserBlack {

    constructor(private appID: string, private appSecret: string, private util: Util){}

    /**
     * 获取黑名单列表
     * @returns 
     */
    async list(beginOpenID?: string){
        return this.util.request<ListResponse, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/tags/members/getblacklist', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                begin_openid: beginOpenID,
            }
        })
    }

    /**
     * 拉黑用户
     * @returns 
     */
     async black(openIDs: string[]){
        return this.util.request<OfficialResponse, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/tags/members/batchblacklist', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                openid_list: openIDs,
            }
        })
    }

    /**
     * 取消拉黑用户
     * @returns 
     */
    async cancelBlack(openIDs: string[]){
        return this.util.request<OfficialResponse, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/tags/members/batchunblacklist', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                openid_list: openIDs,
            }
        })
    }
}