/// <reference types="node" />
import { Stream } from 'stream';
import { OfficialResponse } from '../../types';
import { Readable } from 'stream';
export declare type MediaType = 'image' | 'voice' | 'video' | 'thumb';
export declare type UploadTmpMedia = {
    type: MediaType;
    media_id: string;
    created_at: number;
};
export declare type DownloadTmpMedia = OfficialResponse | Stream | {
    video_url: string;
};
export declare type UploadImg = {
    url: string;
};
declare type UploadBaseMedia = {
    type: 'image' | 'voice' | 'thumb';
    fileContent: Readable;
};
declare type UploadVideoMedia = {
    type: 'video';
    fileContent: Readable;
    title: string;
    introduction: string;
};
export declare type UploadMediaParam = UploadBaseMedia | UploadVideoMedia;
export declare type UploadMediaResponse = {
    media_id: string;
    url: string;
};
declare type DownloadVideoMedia = {
    title: string;
    description: string;
    down_url: string;
};
export declare type Article = {
    title: string;
    thumb_media_id: string;
    author?: string;
    digest?: string;
    show_cover_pic: string;
    content: string;
    content_source_url?: string;
    need_open_comment?: number;
    only_fans_can_comment?: number;
};
declare type DownloadNewsMedia = {
    news_item: Article[];
};
export declare type DownloadMedia = Stream | DownloadVideoMedia | DownloadNewsMedia;
export declare type MediaCount = {
    voice_count: number;
    video_count: number;
    image_count: number;
    news_count: number;
};
declare type BaseMedia = {
    media_id: string;
    name: string;
    update_time: string;
    url: string;
};
declare type NewsMedia = {
    media_id: string;
    content: {
        news_item: Article[];
    };
    update_time: number;
};
export declare type MediaList = {
    total_count: number;
    item_count: number;
    item: BaseMedia[] | NewsMedia[];
};
export declare type AddNewsMedia = {
    media_id: string;
};
export {};
