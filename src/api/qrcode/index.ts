import { Util } from '../../util'
import { OfficialResponse } from '../../types'
import {
    CreateParam,
    CreateResponse,
} from './types'

export class Qrcode {

    constructor(private appID: string, private appSecret: string, private util: Util){}

    /**
     * 生成带参数的二维码
     * @returns 
     */
    async create(data: CreateParam){
        return this.util.request<CreateResponse, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/qrcode/create', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: data
        })
    }

    getUrl(ticket: string): string{
        return `https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=${ticket}`
    }
}