export declare type Language = 'zh_CN' | 'zh_TW' | 'en';
declare type SubscribeScene = 'ADD_SCENE_SEARCH' | 'ADD_SCENE_ACCOUNT_MIGRATION' | 'ADD_SCENE_PROFILE_CARD' | 'ADD_SCENE_QR_CODE' | 'ADD_SCENE_PROFILE_LINK' | 'ADD_SCENE_PROFILE_ITEM' | 'ADD_SCENE_PAID' | 'ADD_SCENE_WECHAT_ADVERTISEMENT' | 'ADD_SCENE_REPRINT' | 'ADD_SCENE_LIVESTREAM' | 'ADD_SCENE_CHANNELS' | 'ADD_SCENE_OTHERS';
declare type SubscribeUserInfo = {
    subscribe: number;
    openid: string;
    language: Language;
    subscribe_time: number;
    unionid?: string;
    remark: string;
    groupid: number;
    tagid_list: number[];
    subscribe_scene: SubscribeScene | string;
    qr_scene: number | string;
    qr_scene_str: string;
};
declare type UnSubscribeUserInfo = {
    subscribe: number;
    openid: string;
};
export declare type UserInfo = SubscribeUserInfo | UnSubscribeUserInfo;
export declare type BatchUserInfoParam = {
    user_list: {
        openid: string;
        lang?: Language;
    }[];
};
export declare type BatchUserInfoResponse = {
    user_info_list: UserInfo[];
};
export declare type ListResponse = {
    total: number;
    count: number;
    data: {
        openid: string[];
    };
    next_openid: string;
};
export {};
