import { OfficialResponse } from '../../types'

export type CreateResponse = {
    tag: {
        id: number,
        name: string,
    }
}

export type ListResponse = {
    tags: {
        id: number,
        name: string,
        count: number,
    }
}

export type UserListResponse = {
    count: number
    data: {
        openid: string[]
    },  
    next_openid: string
}

export type UserTagsResponse = {
    tagid_list: number[]
}

export type Language = 'zh_CN' | 'zh_TW' | 'en'

// 返回用户关注的渠道来源，ADD_SCENE_SEARCH 公众号搜索，ADD_SCENE_ACCOUNT_MIGRATION 公众号迁移，ADD_SCENE_PROFILE_CARD 名片分享，ADD_SCENE_QR_CODE 扫描二维码，ADD_SCENE_PROFILE_LINK 图文页内名称点击，ADD_SCENE_PROFILE_ITEM 图文页右上角菜单，ADD_SCENE_PAID 支付后关注，ADD_SCENE_WECHAT_ADVERTISEMENT 微信广告，ADD_SCENE_REPRINT 他人转载 ,ADD_SCENE_LIVESTREAM 视频号直播，ADD_SCENE_CHANNELS 视频号 , ADD_SCENE_OTHERS 其他
type SubscribeScene = 'ADD_SCENE_SEARCH' | 'ADD_SCENE_ACCOUNT_MIGRATION' | 'ADD_SCENE_PROFILE_CARD' | 'ADD_SCENE_QR_CODE' | 'ADD_SCENE_PROFILE_LINK' | 'ADD_SCENE_PROFILE_ITEM' | 'ADD_SCENE_PAID' | 'ADD_SCENE_WECHAT_ADVERTISEMENT' | 'ADD_SCENE_REPRINT' | 'ADD_SCENE_LIVESTREAM' | 'ADD_SCENE_CHANNELS' | 'ADD_SCENE_OTHERS'

type SubscribeUserInfo = {
    subscribe: number,
    openid: string,
    language: Language,
    subscribe_time: number,
    unionid?: string,
    remark: string,
    groupid: number,
    tagid_list: number[],
    subscribe_scene: SubscribeScene | string,
    qr_scene: number | string,
    qr_scene_str: string,
}

type UnSubscribeUserInfo = {
    subscribe: number,
    openid: string,
}

export type UserInfo = SubscribeUserInfo | UnSubscribeUserInfo

export type BatchUserInfoParam = {
    user_list: {
        openid: string,
        lang?: Language,
    }[]
}

export type BatchUserInfoResponse = {
    user_info_list: UserInfo[]
}

export type ListResponse = {
    total: number,
    count: number,
    data: {
        openid: string[],
    },
    next_openid: string,
}