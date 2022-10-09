import { Util } from '../../util'
import { OfficialResponse } from '../../types'
import {
    ListParam,
    ListResponse,
    ActionCommentParam,
    ReplyCommentParam,
} from './types'

export class Comment {

    constructor(private appID: string, private appSecret: string, private util: Util){}

    /**
     * 打开已群发文章评论
     * @returns 
     */
    async open(msgDataID: number, index?: number){
        return this.util.request<OfficialResponse, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/comment/open', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                msg_data_id: msgDataID,
                index: index
            }
        })
    }

    /**
     * 关闭已群发文章评论
     * @returns 
     */
    async close(msgDataID: number, index?: number){
        return this.util.request<OfficialResponse, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/comment/close', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                msg_data_id: msgDataID,
                index: index
            }
        })
    }

    /**
     * 查看指定文章的评论数据
     * @returns 
     */
    async list(data: ListParam){
        return this.util.request<ListResponse, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/comment/list', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: data
        })
    }

    /**
     * 将评论标记精选
     * @returns 
     */
    async markElect(data: ActionCommentParam){
        return this.util.request<OfficialResponse, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/comment/markelect', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: data
        })
    }

    /**
     * 将评论取消精选
     * @returns 
     */
     async unMarkElect(data: ActionCommentParam){
        return this.util.request<OfficialResponse, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/comment/unmarkelect', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: data
        })
    }

    /**
     * 删除评论
     * @returns 
     */
    async delete(data: ActionCommentParam){
        return this.util.request<OfficialResponse, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/comment/delete', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: data
        })
    }

    /**
     * 回复评论
     * @returns 
     */
     async reply(data: ReplyCommentParam){
        return this.util.request<OfficialResponse, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/comment/reply/add', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: data
        })
    }

    /**
     * 删除回复
     * @returns 
     */
    async deleteReply(data: ActionCommentParam){
        return this.util.request<OfficialResponse, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/comment/reply/delete', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: data
        })
    }
}