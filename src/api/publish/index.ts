import { Util } from '../../util'
import { OfficialResponse } from '../../types'
import {
    Submit,
    GetStatus,
    GetArticle,
    ArticleList,
} from './types'

export class Publish {

    constructor(private appID: string, private appSecret: string, private util: Util){}

    /**
     * 发布草稿
     * @returns 
     */
    async submit(mediaID: string){
        return this.util.request<Submit, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/freepublish/submit', {
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
     * 发布状态
     * @returns 
     */
    async getStatus(publishID: string){
        return this.util.request<GetStatus, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/freepublish/get', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                publish_id: publishID
            }
        })
    }

    /**
     * 删除已发布文章
     * @returns 
     */
    async delete(articleID: string, index?: number){
        return this.util.request<OfficialResponse, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/freepublish/delete', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                article_id: articleID,
                index: index,
            }
        })
    }

    /**
     * 获取已发布文章
     * @returns 
     */
     async getArticle(articleID: string){
        return this.util.request<GetArticle, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/freepublish/getarticle', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                article_id: articleID,
            }
        })
    }

    /**
     * 获取成功发布文章列表
     * @returns 
     */
     async articleList(offset: number = 0, count: number = 20, noContent: boolean = false){
        return this.util.request<ArticleList, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/freepublish/batchget', {
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