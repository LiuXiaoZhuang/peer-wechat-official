import { Stream } from 'stream'
import { OfficialResponse } from '../../types'
import { Readable } from 'stream';

export type MediaType = 'image' | 'voice' | 'video' | 'thumb'

export type UploadTmpMedia = {
    type: MediaType,
    media_id: string,
    created_at: number,
}

export type DownloadTmpMedia = OfficialResponse | Stream | {
    video_url: string
}

export type UploadImg = {
    url: string
}

type UploadBaseMedia = {
    type: 'image' | 'voice' | 'thumb',
    fileContent: Readable
}

type UploadVideoMedia = {
    type: 'video',
    fileContent: Readable,
    title: string,
    introduction: string,
}

export type UploadMediaParam = UploadBaseMedia | UploadVideoMedia

export type UploadMediaResponse = {
    media_id: string,
    url: string
}

type DownloadVideoMedia = {
    title: string,
    description: string,
    down_url: string,
}

export type Article = {
    title: string,
    thumb_media_id: string,
    author?: string,
    digest?: string,
    show_cover_pic: string,
    content: string,
    content_source_url?: string,
    need_open_comment?: number,
    only_fans_can_comment?: number,
}

type DownloadNewsMedia = {
    news_item: Article[]
}

export type DownloadMedia = Stream | DownloadVideoMedia | DownloadNewsMedia

export type MediaCount = {
    voice_count: number,
    video_count: number,
    image_count: number,
    news_count: number,
}

type BaseMedia = {
    media_id: string,
    name: string,
    update_time: string,
    url: string,
}



type NewsMedia = {
    media_id: string,
    content: {
        news_item: Article[]
    },
    update_time: number,
}

export type MediaList = {
    total_count: number,
    item_count: number,
    item: BaseMedia[] | NewsMedia[]
}

export type AddNewsMedia = {
    media_id: string
}