import { Util } from '../../util'
import { OfficialResponse } from '../../types'
import { GetIndustry, Add, GetTemplates, SendParam, SendResponse } from './types'

export class Template {

    constructor(private appID: string, private appSecret: string, private util: Util){}

    /**
     * 设置所属行业
     * @returns 
     */
    async setIndustry(industryID1: string, industryID2: string){
        return this.util.request<OfficialResponse, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/template/api_set_industry', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                industry_id1: industryID1,
                industry_id2: industryID2,
            }
        })
    }

    /**
     * 获取设置的行业信息
     * @returns 
     */
     async getIndustry(){
        return this.util.request<GetIndustry, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/template/get_industry', {
            method: 'GET',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
        })
    }

    /**
     * 添加模板
     * @returns 
     */
    async add(templateIDShort: string){
        return this.util.request<Add, Add>('https://api.weixin.qq.com/cgi-bin/template/api_add_template', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                template_id_short: templateIDShort,
            }
        })
    }

    /**
     * 获取已添加的模板
     * @returns 
     */
     async getTemplates(){
        return this.util.request<GetTemplates, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/template/get_all_private_template', {
            method: 'GET',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
        })
    }

    /**
     * 删除已添加的模板
     * @returns 
     */
     async del(templateID: string){
        return this.util.request<OfficialResponse, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/template/del_private_template', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                template_id: templateID
            }
        })
    }

    /**
     * 发送模板消息
     * @returns 
     */
     async send(data: SendParam){
        return this.util.request<SendResponse, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/message/template/send', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: data
        })
    }

}