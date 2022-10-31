import { OfficialResponse } from '../../types'

export type AccountParam = {
    kf_account: string,
    nickname: string,
    password: string,
}

export type AccountList = {
    kf_list: {
        kf_account: string,
        kf_nick: string,
        kf_id: string,
        kf_headimgurl: string,
    }[]
}

type BaseMessage = {
    touser: string,
    customservice?: {
        kf_account: string,
    }
}

type TextMessage = BaseMessage & {
    msgtype: 'text',
    text: {
        content: string
    }
}

type ImageMessage = BaseMessage & {
    msgtype: 'image',
    image: {
        media_id: string
    }
}

type VoiceMessage = BaseMessage & {
    msgtype: 'voice',
    voice: {
        media_id: string
    }
}

type VideoMessage = BaseMessage & {
    msgtype: 'video',
    video: {
        media_id: string,
        thumb_media_id: string,
        title?: string,
        description?: string,
    }
}

type MusicMessage = BaseMessage & {
    msgtype: 'music',
    music: {
        title?: string,
        description?: string,
        musicurl: string,
        hqmusicurl: string,
        thumb_media_id: string,
    }
}

type NewsMessage = BaseMessage & {
    msgtype: 'news',
    news: {
        articles: {
            title?: string,
            description?: string,
            url?: string,
            picurl?: string,
        }[]
    }
}

type MpnewsMessage = BaseMessage & {
    msgtype: 'mpnews',
    mpnews: {
        media_id: string
    }
}

type MpnewsArticleMessage = BaseMessage & {
    msgtype: 'mpnewsarticle',
    mpnewsarticle: {
        article_id: string
    }
}

type MsgMenuMessage = BaseMessage & {
    msgtype: 'msgmenu',
    msgmenu: {
        head_content: string,
        list: {
            id: string,
            content: string,
        }[],
        tail_content: string,
    }
}

type WxcardMessage = BaseMessage & {
    msgtype: 'wxcard',
    wxcard: {
        card_id: string,
    }
}

type MiniprogrampageMessage = BaseMessage & {
    msgtype: 'miniprogrampage',
    miniprogrampage: {
        title?: string,
        appid: string,
        pagepath: string,
        thumb_media_id: string,
    }
}

export type Message = TextMessage | ImageMessage | VoiceMessage | VideoMessage | MusicMessage | NewsMessage | MpnewsMessage | MpnewsArticleMessage | MsgMenuMessage | WxcardMessage | MiniprogrampageMessage
