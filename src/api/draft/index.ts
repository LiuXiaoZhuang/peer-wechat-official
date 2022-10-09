import { Util } from '../../util'
import { OfficialResponse } from '../../types'
import {
    AddDraft,
    Article,
    GetDraft,
    CountDraft,
    DraftList,
} from './types'

export class Draft {

    constructor(private appID: string, private appSecret: string, private util: Util){}

    /**
     * 新建草稿
     * @returns 
     */
    async addDraft(articles: Article[]){
        return this.util.request<AddDraft, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/draft/add', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                articles: articles
            }
        })
    }

    /**
     * 获取草稿
     * @returns 
     */
    async getDraft(mediaID: string){
        return this.util.request<GetDraft, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/draft/get', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                media_id: mediaID
            }
        })
    }

    /**
     * 删除草稿
     * @returns 
     */
    async deleteDraft(mediaID: string){
        return this.util.request<OfficialResponse, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/draft/delete', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                media_id: mediaID
            }
        })
    }

    /**
     * 删除草稿
     * @returns 
     */
    async updateDraft(mediaID: string, index: number, article: Article){
        return this.util.request<OfficialResponse, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/draft/update', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                media_id: mediaID,
                index: index,
                articles: article
            }
        })
    }

    /**
     * 获取草稿总数
     * @returns 
     */
    async countDraft(){
        return this.util.request<CountDraft, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/draft/count', {
            method: 'GET',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
        })
    }


    /**
     * 获取草稿列表
     * @returns 
     */
    async draftList(offset: number = 0, count: number = 20, noContent: boolean = false){
        return this.util.request<DraftList, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/draft/batchget', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                offset: offset,
                count: count,
                no_content: noContent ? 1 : 0,
            }
        })
    }

}