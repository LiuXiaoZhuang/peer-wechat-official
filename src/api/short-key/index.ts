import { Util } from '../../util'
import { OfficialResponse } from '../../types'
import {
    CreateResponse,
    AnalysisResponse,
} from './types'

export class ShortKey {

    constructor(private appID: string, private appSecret: string, private util: Util){}

    /**
     * 生成短key
     * @returns 
     */
    async create(data: string, expireSeconds?: number){
        return this.util.request<CreateResponse, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/shorten/gen', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                long_data: data,
                expire_seconds: expireSeconds
            }
        })
    }

    /**
     * 解析短key
     * @returns 
     */
    async analysis(shortKey: string){
        return this.util.request<AnalysisResponse, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/shorten/fetch', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                short_key: shortKey,
            }
        })
    }
}