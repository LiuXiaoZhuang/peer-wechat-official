import { Stream } from 'stream'
import { OfficialResponse } from '../../types'
import { Readable } from 'stream';

export type Article = {
    title: string,
    thumb_media_id: string,
    author: string,
    digest?: string,
    show_cover_pic: string,
    content: string,
    content_source_url: string,
    need_open_comment?: number,
    only_fans_can_comment?: number,
}

export type AddDraft = {
    media_id: string
}

export type GetDraft = {
    news_item: Article[]
}

export type CountDraft = {
    total_count: number
}

export type DraftList = {
    total_count: number,
    item_count: number,
    item: {
        media_id: string,
        content: {
            news_item: Article[]
        },
        update_time: number,
    }
}