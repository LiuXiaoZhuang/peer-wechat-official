// 接收
type Base = {
    ToUserName: string,
    FromUserName: string,
    CreateTime: number,
}

// 基础接收消息
type BaseMessage = Base & {
    MsgId: string,
    MsgDataId?: string,
    Idx?: string,
    bizmsgmenuid?: string,
}

// 接收文本消息
type Text = BaseMessage & {
    MsgType: 'text',
    Content: string,
}

// 接收图片消息
type Image = BaseMessage & {
    MsgType: 'image',
    PicUrl: string,
    MediaId: string,
}

// 接收语音消息
type Voice = BaseMessage & {
    MsgType: 'voice',
    Format: string,
    MediaId: string,
    Recognition?: string,
}

// 接收视频消息
type Video = BaseMessage & {
    MsgType: 'video',
    ThumbMediaId: string,
    MediaId: string,
}

// 接收小视频（短视频）消息
type ShortVideo = BaseMessage & {
    MsgType: 'shortvideo',
    ThumbMediaId: string,
    MediaId: string,
}

// 接收地理位置消息
type Location = BaseMessage & {
    MsgType: 'location',
    Location_X: number,
    Location_Y: number,
    Scale: number,
    Label: string,
}

// 接收链接消息
type Link = BaseMessage & {
    MsgType: 'link',
    Title: string,
    Description: string,
    Url: string,
}

// 接收消息
type Message = Text | Image | Voice | Video | ShortVideo | Location | Link

// 基础接收事件
type BaseEvent = Base & {
    MsgType: 'event',
}

// 关注事件/扫描带参数二维码事件
type SubscribeEvent = BaseEvent & {
    Event: 'subscribe' | 'SCAN',
    EventKey?: string,
    Ticket?: string,
}

// 取消关注
type UnsubscribeEvent = BaseEvent & {
    Event: 'unsubscribe'
}

// 上报地理位置事件
type LocationEvent = BaseEvent & {
    Event: 'LOCATION',
    Latitude: number,
    Longitude: number,
    Precision: number,
}

// 菜单点击事件
type ClickEvent = BaseEvent & {
    Event: 'CLICK',
    EventKey: string,
}

// 点击菜单链接事件
type ViewEvent = BaseEvent & {
    Event: 'VIEW',
    EventKey: string,
}

/** 这里记录特殊事件 **/

type CopyrightCheckResultItem = {
    ArticleIdx: number,
    UserDeclareState: number,
    AuditState: number,
    OriginalArticleUrl: string,
    OriginalArticleType: number,
    CanReprint: number,
    NeedReplaceContent: number,
    NeedShowReprintSource: number,
}

type ArticleUrlResultItem = {
    ArticleIdx: number,
    ArticleUrl: string,
}

// 事件推送群发结果
type MasssendJobFinishEvent = BaseEvent & {
    Event: 'MASSSENDJOBFINISH',
    Status: string,
    TotalCount: number,
    FilterCount: number,
    SentCount: number,
    ErrorCount: number,
    CopyrightCheckResult: {
        Count: number,
        ResultList: {
            item: CopyrightCheckResultItem | CopyrightCheckResultItem[]
        }
    },
    ArticleUrlResult: {
        Count: number,
        ResultList: {
            item: ArticleUrlResultItem | ArticleUrlResultItem[]
        }
    },
}

// 模版消息发送任务结果
type TemplateSendJobFinishEvent = BaseEvent & {
    Event: 'TEMPLATESENDJOBFINISH',
    Status: string,
    MsgID: string,
}

type SubscribeMsgResult = {
    TemplateId: string,
    SubscribeStatusString: 'accept' | 'reject',
    PopupScene?: number,
}

// 订阅消息
type SubscribeMsgPopupEvent = BaseEvent & {
    Event: 'subscribe_msg_popup_event',
    SubscribeMsgPopupEvent: {
        List: SubscribeMsgResult | SubscribeMsgResult[] | {
            TemplateId: string,
            MsgID: string,
            ErrorCode: string,
            ErrorStatus: string,
        }
    }
}

// 授权变更
type UserInfoModifiedEvent = BaseEvent & {
    Event: 'user_info_modified',
    OpenID: string,
    AppID: string,
    RevokeInfo: string,
}

// 资质认证成功（此时立即获得接口权限）
type QualificationVerifySuccessEvent = BaseEvent & {
    Event: 'qualification_verify_success',
    ExpiredTime: number,
}

// 资质认证失败
type QualificationVerifyFailEvent = BaseEvent & {
    Event: 'qualification_verify_fail',
    FailTime: number,
    FailReason: string,
}

// 名称认证成功（即命名成功）
type NamingVerifySuccessEvent = BaseEvent & {
    Event: 'naming_verify_success',
    ExpiredTime: number,
}

// 名称认证失败（这时虽然客户端不打勾，但仍有接口权限）
type NamingVerifyFailEvent = BaseEvent & {
    Event: 'naming_verify_fail',
    FailTime: number,
    FailReason: string,
}

// 年审通知
type AnnualRenewEvent = BaseEvent & {
    Event: 'annual_renew',
    ExpiredTime: number,
}

// 接收事件
type Event = SubscribeEvent |
            UnsubscribeEvent |
            LocationEvent |
            ClickEvent |
            ViewEvent |
            MasssendJobFinishEvent |
            TemplateSendJobFinishEvent |
            SubscribeMsgPopupEvent |
            UserInfoModifiedEvent |
            QualificationVerifySuccessEvent |
            QualificationVerifyFailEvent |
            NamingVerifySuccessEvent |
            NamingVerifyFailEvent |
            AnnualRenewEvent

export type ReceiveData = Message | Event