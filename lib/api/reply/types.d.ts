declare type Base = {
    ToUserName: string;
    FromUserName: string;
    CreateTime: number;
};
declare type Text = Base & {
    MsgType: 'text';
    Content: string;
};
declare type Image = Base & {
    MsgType: 'image';
    Image: {
        MediaId: string;
    };
};
declare type Voice = Base & {
    MsgType: 'voice';
    Voice: {
        MediaId: string;
    };
};
declare type Video = Base & {
    MsgType: 'video';
    Video: {
        MediaId: string;
        Title?: string;
        Description?: string;
    };
};
declare type Music = Base & {
    MsgType: 'music';
    Music: {
        Title?: string;
        Description?: string;
        MusicUrl?: string;
        HQMusicUrl?: string;
        ThumbMediaId: string;
    };
};
declare type News = Base & {
    MsgType: 'news';
    Articles: {
        Title: string;
        Description: string;
        PicUrl: string;
        Url: string;
    }[];
};
export declare type Message = Text | Image | Voice | Video | Music | News;
export {};
