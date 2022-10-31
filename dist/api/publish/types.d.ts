import { OfficialResponse } from '../../types';
export declare type Submit = OfficialResponse & {
    publish_id: string;
};
export declare type GetStatus = {
    publish_id: string;
    publish_status: number;
    article_id?: string;
    article_detail?: {
        count: number;
        item: {
            idx: number;
            article_url: string;
        }[];
    };
    fail_idx: number[];
};
declare type Article = {
    title: string;
    thumb_media_id: string;
    author: string;
    digest?: string;
    show_cover_pic: string;
    content: string;
    content_source_url: string;
    need_open_comment?: number;
    only_fans_can_comment?: number;
    url: string;
    is_deleted: boolean;
};
export declare type GetArticle = {
    news_item: Article[];
};
export declare type ArticleList = {
    total_count: number;
    item_count: number;
    item: {
        article_id: string;
        content: {
            news_item: Article[];
        };
        update_time: number;
    };
};
export {};
