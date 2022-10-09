// 基础回复
type Base = {
    ToUserName: string,
    FromUserName: string,
    CreateTime: number,
}

// 回复文本
type Text = Base & {
    MsgType: 'text',
    Content: string,
}

// 回复图片
type Image = Base & {
    MsgType: 'image',
    Image: {
        MediaId: string
    },
}

// 回复语音
type Voice = Base & {
    MsgType: 'voice',
    Voice: {
        MediaId: string
    },
}

// 回复视频
type Video = Base & {
    MsgType: 'video',
    Video: {
        MediaId: string,
        Title?: string,
        Description?: string,
    },
}

// 回复视频
type Music = Base & {
    MsgType: 'music',
    Music: {
        Title?: string,
        Description?: string,
        MusicUrl?: string,
        HQMusicUrl?: string,
        ThumbMediaId: string,
    },
}

// 回复图文
type News = Base & {
    MsgType: 'news',
    Articles: {
        Title: string,
        Description: string,
        PicUrl: string,
        Url: string,
    }[],
}

type TransferCustomerService = Base & {
    MsgType: 'transfer_customer_service',
    TransInfo?: {
        KfAccount: string
    }
}

// 回复消息
export type Message = Text | Image | Voice | Video | Music | News | TransferCustomerService