import { Util } from '../../util'
import { OfficialResponse } from '../../types'
import {
    SendWithTagParam,
    SendWithOpenIDParam,
    SendResponse,
    SendWithPreviewParam,
    GetStatus,
} from './types'

export class Message {

    constructor(private appID: string, private appSecret: string, private util: Util){}

    /**
     * 根据标签进行群发
     * @returns 
     */
    async sendWithTag(data: SendWithTagParam){
        return this.util.request<SendResponse, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/message/mass/sendall', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: data
        })
    }

    /**
     * 根据 OpenID 列表群发
     * @returns 
     */
    async sendWithOpenID(data: SendWithOpenIDParam){
        return this.util.request<SendResponse, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/message/mass/send', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: data
        })
    }

    /**
     * 删除群发
     * @returns 
     */
    async delete(msgID: number, articleIdx?: number){
        return this.util.request<OfficialResponse, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/message/mass/delete', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                msg_id: msgID,
                article_idx: articleIdx,
            }
        })
    }

    /**
     * 预览
     * @returns 
     */
     async preview(data: SendWithPreviewParam){
        return this.util.request<OfficialResponse, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/message/mass/preview', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: data
        })
    }

    /**
     * 查询群发消息发送状态
     * @returns 
     */
    async getStatus(msgID: number){
        return this.util.request<GetStatus, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/message/mass/get', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                msg_id: msgID
            }
        })
    }


    /**
     * 设置群发速度
     * @param speed 群发速度的级别，是一个0到4的整数，数字越大表示群发速度越慢。0 ~ 4
     * @returns 
     */
     async setSpeed(speed: number){
        return this.util.request<OfficialResponse, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/message/mass/speed/set', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                speed: speed
            }
        })
    }

}