import { Util } from '../../util'
import { OfficialResponse } from '../../types'
import {
    Language,
    BatchUserInfoParam,
    BatchUserInfoResponse,
    ListResponse,
} from './types'

export class User {

    constructor(private appID: string, private appSecret: string, private util: Util){}

    /**
     * 设置用户备注名
     * @returns 
     */
    async updateRemark(openID: string, remark: string){
        return this.util.request<OfficialResponse, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/user/info/updateremark', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                openid: openID,
                remark: remark
            }
        })
    }

    /**
     * 获取用户基本信息
     * @returns 
     */
     async userInfo(openID: string, lang?: Language){
        return this.util.request<OfficialResponse, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/user/info', {
            method: 'GET',
            params: {
                access_token: await this.util.accessToken(this.appID),
                openid: openID,
                lang: lang
            },
        })
    }

    /**
     * 批量获取用户基本信息
     * @returns 
     */
    async batchUserInfo(data: BatchUserInfoParam){
        return this.util.request<BatchUserInfoResponse, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/user/info/batchget', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID),
            },
            data: data
        })
    }

    /**
     * 获取用户列表
     * @returns 
     */
    async list(nextOpenID?: string){
        return this.util.request<ListResponse, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/user/get', {
            method: 'GET',
            params: {
                access_token: await this.util.accessToken(this.appID),
                next_openid: nextOpenID
            },
        })
    }
}