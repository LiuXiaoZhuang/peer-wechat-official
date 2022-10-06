import { Util } from '../../util'
import { OfficialResponse } from '../../types'
import { SearchQuota, SearchRid } from './types'

export class OpenApi {

    constructor(private appID: string, private appSecret: string, private util: Util){}

    /**
     * 清空 api 的调用quota
     * @returns 
     */
    async clearQuota(){
        return this.util.request<OfficialResponse, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/clear_quota', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                appid: this.appID
            }
        })
    }

    /**
     * 查询 openAPI 调用quota
     * @returns 
     */
     async getQuota(cgiPath: string){
        return this.util.request<SearchQuota, SearchQuota>('https://api.weixin.qq.com/cgi-bin/openapi/quota/get', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                cgi_path: cgiPath
            }
        })
    }

    /**
     * 查询 rid 信息
     * @returns 
     */
     async getRid(rid: string){
        return this.util.request<SearchRid, SearchRid>('https://api.weixin.qq.com/cgi-bin/openapi/rid/get', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                rid: rid
            }
        })
    }
}