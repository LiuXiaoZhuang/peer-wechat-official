export declare type Article = {
    title: string;
    thumb_media_id: string;
    author: string;
    digest?: string;
    show_cover_pic: string;
    content: string;
    content_source_url: string;
    need_open_comment?: number;
    only_fans_can_comment?: number;
};
export declare type AddDraft = {
    media_id: string;
};
export declare type GetDraft = {
    news_item: Article[];
};
export declare type CountDraft = {
    total_count: number;
};
export declare type DraftList = {
    total_count: number;
    item_count: number;
    item: {
        media_id: string;
        content: {
            news_item: Article[];
        };
        update_time: number;
    };
};
