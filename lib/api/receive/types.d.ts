declare type Base = {
    ToUserName: string;
    FromUserName: string;
    CreateTime: number;
};
declare type BaseMessage = Base & {
    MsgId: string;
    MsgDataId?: string;
    Idx?: string;
};
declare type Text = BaseMessage & {
    MsgType: 'text';
    Content: string;
};
declare type Image = BaseMessage & {
    MsgType: 'image';
    PicUrl: string;
    MediaId: string;
};
declare type Voice = BaseMessage & {
    MsgType: 'voice';
    Format: string;
    MediaId: string;
    Recognition?: string;
};
declare type Video = BaseMessage & {
    MsgType: 'video';
    ThumbMediaId: string;
    MediaId: string;
};
declare type ShortVideo = BaseMessage & {
    MsgType: 'shortvideo';
    ThumbMediaId: string;
    MediaId: string;
};
declare type Location = BaseMessage & {
    MsgType: 'location';
    Location_X: number;
    Location_Y: number;
    Scale: number;
    Label: string;
};
declare type Link = BaseMessage & {
    MsgType: 'link';
    Title: string;
    Description: string;
    Url: string;
};
declare type Message = Text | Image | Voice | Video | ShortVideo | Location | Link;
declare type BaseEvent = Base & {
    MsgType: 'event';
};
declare type SubscribeEvent = BaseEvent & {
    Event: 'subscribe' | 'SCAN';
    EventKey?: string;
    Ticket?: string;
};
declare type UnsubscribeEvent = BaseEvent & {
    Event: 'unsubscribe';
};
declare type LocationEvent = BaseEvent & {
    Event: 'LOCATION';
    Latitude: number;
    Longitude: number;
    Precision: number;
};
declare type ClickEvent = BaseEvent & {
    Event: 'CLICK';
    EventKey: string;
};
declare type ViewEvent = BaseEvent & {
    Event: 'VIEW';
    EventKey: string;
};
declare type CopyrightCheckResultItem = {
    ArticleIdx: number;
    UserDeclareState: number;
    AuditState: number;
    OriginalArticleUrl: string;
    OriginalArticleType: number;
    CanReprint: number;
    NeedReplaceContent: number;
    NeedShowReprintSource: number;
};
declare type ArticleUrlResultItem = {
    ArticleIdx: number;
    ArticleUrl: string;
};
declare type MasssendJobFinishEvent = BaseEvent & {
    Event: 'MASSSENDJOBFINISH';
    Status: string;
    TotalCount: number;
    FilterCount: number;
    SentCount: number;
    ErrorCount: number;
    CopyrightCheckResult: {
        Count: number;
        ResultList: {
            item: CopyrightCheckResultItem | CopyrightCheckResultItem[];
        };
    };
    ArticleUrlResult: {
        Count: number;
        ResultList: {
            item: ArticleUrlResultItem | ArticleUrlResultItem[];
        };
    };
};
declare type TemplateSendJobFinishEvent = BaseEvent & {
    Event: 'TEMPLATESENDJOBFINISH';
    Status: string;
    MsgID: string;
};
declare type SubscribeMsgResult = {
    TemplateId: string;
    SubscribeStatusString: 'accept' | 'reject';
    PopupScene?: number;
};
declare type SubscribeMsgPopupEvent = BaseEvent & {
    Event: 'subscribe_msg_popup_event';
    SubscribeMsgPopupEvent: {
        List: SubscribeMsgResult | SubscribeMsgResult[] | {
            TemplateId: string;
            MsgID: string;
            ErrorCode: string;
            ErrorStatus: string;
        };
    };
};
declare type Event = SubscribeEvent | UnsubscribeEvent | LocationEvent | ClickEvent | ViewEvent | MasssendJobFinishEvent | TemplateSendJobFinishEvent | SubscribeMsgPopupEvent;
export declare type ReceiveData = Message | Event;
export {};
