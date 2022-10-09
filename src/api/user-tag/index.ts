import { Util } from '../../util'
import { OfficialResponse } from '../../types'
import {
    CreateResponse,
    ListResponse,
    UserListResponse,
    UserTagsResponse
} from './types'

export class UserTag {

    constructor(private appID: string, private appSecret: string, private util: Util){}

    /**
     * 创建标签
     * @returns 
     */
    async create(name: string){
        return this.util.request<CreateResponse, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/tags/create', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                tag: {
                    name: name
                },
            }
        })
    }


    /**
     * 获取已创建的标签列表
     * @returns 
     */
    async list(){
        return this.util.request<ListResponse, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/tags/get', {
            method: 'GET',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
        })
    }

    /**
     * 编辑标签
     * @returns 
     */
     async update(id: number, name: string){
        return this.util.request<OfficialResponse, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/tags/update', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                tag: {
                    id: id,
                    name: name
                }
            }
        })
    }

    /**
     * 删除标签
     * @returns 
     */
    async delete(id: number){
        return this.util.request<OfficialResponse, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/tags/delete', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                tag: {
                    id: id,
                }
            }
        })
    }

    /**
     * 获取标签下粉丝列表
     * @returns 
     */
    async userList(tagID: number, nextOpenID?: string){
        return this.util.request<UserListResponse, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/user/tag/get', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                tagid: tagID,
                next_openid: nextOpenID
            }
        })
    }

    /**
     * 批量为用户打标签
     * @returns 
     */
    async batchTagging(tagID: number, openIDs: string[]){
        return this.util.request<OfficialResponse, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/tags/members/batchtagging', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                tagid: tagID,
                openid_list: openIDs
            }
        })
    }

    /**
     * 批量为用户取消标签
     * @returns 
     */
    async cancelTagging(tagID: number, openIDs: string[]){
        return this.util.request<OfficialResponse, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/tags/members/batchuntagging', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                tagid: tagID,
                openid_list: openIDs
            }
        })
    }

    /**
     * 获取用户身上的标签列表
     * @returns 
     */
     async userTags(openID: string){
        return this.util.request<UserTagsResponse, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/tags/getidlist', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                openid: openID
            }
        })
    }

    
}