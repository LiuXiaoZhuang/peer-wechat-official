import { Util } from '../../util'
import { OfficialResponse } from '../../types'
import { MenuParam, GetCurrentSelfmenuInfo, CustomMenu, AddConditional, TrymatchConditional, GetMenu } from './types'

export class Menu {

    constructor(private appID: string, private appSecret: string, private util: Util){}

    /**
     * 创建自定义菜单
     * @returns 
     */
    async create(data: MenuParam){
        return this.util.request<OfficialResponse, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/menu/create', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: data
        })
    }

    /**
     * 查询自定义菜单
     * @returns 
     */
    async getCurrentSelfmenuInfo(){
        return this.util.request<GetCurrentSelfmenuInfo, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/get_current_selfmenu_info', {
            method: 'GET',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
        })
    }

    /**
     * 删除菜单
     * @returns 
     */
    async delete(){
        return this.util.request<OfficialResponse, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/menu/delete', {
            method: 'GET',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
        })
    }

    /**
     * 创建个性菜单
     * @returns 
     */
    async addConditional(data: CustomMenu){
        return this.util.request<AddConditional, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/menu/addconditional', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: data
        })
    }

    /**
     * 删除个性菜单
     * @param menuID 
     * @returns 
     */
    async delConditional(menuID: string){
        return this.util.request<OfficialResponse, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/menu/delconditional', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                menuid: menuID
            }
        })
    }

    /**
     * 测试个性菜单
     * @param userID 已关注公众号的，微信号 或 openid
     * @returns 
     */
    async trymatchConditional(userID: string){
        return this.util.request<TrymatchConditional, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/menu/trymatch', {
            method: 'POST',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
            data: {
                user_id: userID
            }
        })
    }

    /**
     * 获取菜单
     * @returns 
     */
    async getMenu(){
        return this.util.request<GetMenu, OfficialResponse>('https://api.weixin.qq.com/cgi-bin/menu/get', {
            method: 'GET',
            params: {
                access_token: await this.util.accessToken(this.appID)
            },
        })
    }
}