import { Util } from '../../util'
import { OfficialResponse } from '../../types'
import { AddParam, AddResponse, GetCategory, GetKeywords, GetPubTemplates, GetTemplates, Send } from './types'

export class Subscribe {

    constructor(private appID: string, private appSecret: string, private util: Util){}

    /**
     * 添加模板
     * @returns 
     */
     async add(data: AddParam){
        return this.util.request<AddResponse, AddResponse>('https://api.weixin.qq.com/wxaapi/newtmpl/addtemplate', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: data
        })
    }

    /**
     * 删除模板
     * @returns 
     */
     async delete(templateID: string){
        return this.util.request<OfficialResponse, OfficialResponse>('https://api.weixin.qq.com/wxaapi/newtmpl/deltemplate', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                priTmplId: templateID
            }
        })
    }

    /**
     * 获取公众号所属类目
     * @returns 
     */
     async getCategory(){
        return this.util.request<GetCategory, OfficialResponse>('https://api.weixin.qq.com/wxaapi/newtmpl/getcategory', {
            method: 'GET',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
        })
    }

    /**
     * 获取模板中的关键词
     * @returns 
     */
     async getKeywords(tid: string){
        return this.util.request<GetKeywords, OfficialResponse>('https://api.weixin.qq.com/wxaapi/newtmpl/getpubtemplatekeywords', {
            method: 'GET',
            params: {
                access_token: await this.util.accessToken(this.appID),
                tid: tid,
            },
        })
    }

    /**
     * 获取类目下的公共模板
     * @returns 
     */
     async getPubTemplates(ids: string, start: number, limit: number){
        return this.util.request<GetPubTemplates, OfficialResponse>('https://api.weixin.qq.com/wxaapi/newtmpl/getpubtemplatetitles', {
            method: 'GET',
            params: {
                access_token: await this.util.accessToken(this.appID),
                ids: ids,
                start: start,
                limit: limit,
            },
        })
    }

    /**
     * 获取私有模板列表
     * @returns 
     */
     async getTemplates(){
        return this.util.request<GetTemplates, OfficialResponse>('https://api.weixin.qq.com/wxaapi/newtmpl/gettemplate', {
            method: 'GET',
            params: {
                access_token: await this.util.accessToken(this.appID),
            },
        })
    }

    /**
     * 发送订阅通知
     * @returns 
     */
     async send(data: Send){
        return this.util.request<OfficialResponse, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/message/subscribe/bizsend', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID),
            },
            data: data
        })
    }
}