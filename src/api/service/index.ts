import { Util } from '../../util'
import { Readable } from 'stream';
import FormData from 'form-data'
import { OfficialResponse } from '../../types'
import { AccountParam, AccountList, Message } from './types'

export class Service {

    constructor(private appID: string, private appSecret: string, private util: Util){}

    /**
     * 添加客服帐号
     * @returns 
     */
    async addAccount(data: AccountParam){
        return this.util.request<OfficialResponse, OfficialResponse>('https://api.weixin.qq.com/customservice/kfaccount/add', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: data
        })
    }

    /**
     * 修改客服帐号
     * @returns 
     */
     async updateAccount(data: AccountParam){
        return this.util.request<OfficialResponse, OfficialResponse>('https://api.weixin.qq.com/customservice/kfaccount/update', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: data
        })
    }

    /**
     * 删除客服帐号
     * @returns 
     */
     async delAccount(kfAccount: string){
        return this.util.request<OfficialResponse, OfficialResponse>('https://api.weixin.qq.com/customservice/kfaccount/del', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                kf_account: kfAccount
            }
        })
    }
    
    /**
     * 设置客服帐号的头像
     * @returns 
     */
     async uploadHeadImg(kfAccount: string, fileContent: Readable){
        let formData = new FormData();
        formData.append('', fileContent);
        let len: number = await new Promise((resolve, reject) => {
            return formData.getLength((err, length) => (err ? reject(err) : resolve(length)));
        });
        return this.util.request<OfficialResponse, OfficialResponse>('https://api.weixin.qq.com/customservice/kfaccount/uploadheadimg', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID),
                kf_account: kfAccount
            },
            data: formData,
            headers: {
                ...formData.getHeaders(), // 小心
                'Content-Length': len,    // 谨慎
            },
        })
    }

    /**
     * 获取客服帐号
     * @returns 
     */
     async accountList(){
        return this.util.request<AccountList, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/customservice/getkflist', {
            method: 'GET',
            params: {
                access_token: await this.util.accessToken(this.appID)
            }
        })
    }

    /**
     * 删除客服帐号
     * @returns 
     */
     async send(data: Message){
        return this.util.request<OfficialResponse, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/message/custom/send', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: data
        })
    }

    /**
     * 客服输入状态
     * @returns 
     */
     async typing(openID: string, command: 'Typing' | 'CancelTyping'){
        return this.util.request<OfficialResponse, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/message/custom/typing', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                touser: openID,
                command: command,
            }
        })
    }
}