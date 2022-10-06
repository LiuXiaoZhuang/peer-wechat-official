type ClickItem = {
    type: 'click' | 'scancode_waitmsg' | 'scancode_push' | 'pic_sysphoto' | 'pic_photo_or_album' | 'pic_weixin' | 'location_select',
    name: string,
    key: string
}

type ViewItem = {
    type: 'view',
    name: string,
    url: string
}

type MiniprogramItem = {
    type: "miniprogram",
    name: string,
    url: string,
    appid: string,
    pagepath: string,
}

type MediaItem = {
    type: "media_id", 
    name: string,
    media_id: string,
}

type ViewLimitedItem = {
    type: "view_limited", 
    name: string,
    media_id: string,
}

type ArticleItem = {
    type: "article_id",
    name: string,
    article_id: string,
}

type ArticleCiewLimitedItem = {
    type: "article_view_limited",
    name: string,
    article_id: string,
}

type Item = ClickItem | ViewItem | MiniprogramItem | MediaItem | ViewLimitedItem | ArticleItem | ArticleCiewLimitedItem

type SubItem = {
    name: string,
    sub_button: Item[]
}

export type MenuParam = {
    button: (Item | SubItem)[]
}

export type CustomMenu = MenuParam & {
    matchrule: {
        tag_id: string,
        client_platform_type: string,
    }
}


type BaseItem = {
    type: 'text' | 'img' | 'voice' | 'video',
    name: string,
    value: string,
}
type NewsItem = {
    type: 'news',
    name: string,
    value: string,
    news_info: {
        list: { 
            title: string,
            author: string,
            digest: string,
            show_cover: number,
            cover_url: string,
            content_url: string,
            source_url: string,
        }[]
    }
}


type ApiBaseItem = {
    type: 'click' | 'scancode_push' | 'scancode_waitmsg' | 'pic_sysphoto' | 'pic_photo_or_album' | ' pic_weixin' | 'location_select',
    name: string,
    key: string,
}

type ViewItem2 = {
    type: 'view',
    name: string,
    url: string,
}

type ApiSubItem = {
    name: string,
    sub_button: {
        list: (MiniprogramItem | ApiBaseItem | ViewItem2)[]
    }
}

type BaseSubItem = {
    name: string,
    sub_button: {
        list: (BaseItem | NewsItem | ViewItem2)[]
    }
}

type ApiMenu = (MiniprogramItem | ApiBaseItem | ViewItem2 | ApiSubItem)[]
type BaseMenu = (BaseItem | NewsItem | ViewItem2 | BaseSubItem)[]

export type GetCurrentSelfmenuInfo = {
    is_menu_open: number,
    selfmenu_info: {
        button: ApiMenu | BaseMenu
    }
}

export type AddConditional = {
    menuid: string
}

export type TrymatchConditional = {
    button: ApiMenu
}

export type GetMenu = {
    menu: {
        button: (Item | SubItem)[],
        menuid?: number,
    },
    conditionalmenu?: {
        button: (Item | SubItem)[],
        matchrule: {
            group_id: number,
            sex: number,
            country: string,
            province: string,
            city: string,
            client_platform_type: number,
        },
        menuid: number,
    }[]
}