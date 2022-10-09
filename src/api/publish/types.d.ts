import { Stream } from 'stream'
import { OfficialResponse } from '../../types'
import { Readable } from 'stream';

export type Submit = OfficialResponse & {
    publish_id: string
}

export type GetStatus = {
    publish_id: string,
    publish_status: number, // 发布状态，0:成功, 1:发布中，2:原创失败, 3: 常规失败, 4:平台审核不通过, 5:成功后用户删除所有文章, 6: 成功后系统封禁所有文章
    article_id?: string,
    article_detail?: {
        count: number,
        item: {
            idx: number,
            article_url: string,
        }[]
    },
    fail_idx: number[]
}

type Article = {
    title: string,
    thumb_media_id: string,
    author: string,
    digest?: string,
    show_cover_pic: string,
    content: string,
    content_source_url: string,
    need_open_comment?: number,
    only_fans_can_comment?: number,
    url: string,
    is_deleted: boolean,
}

export type GetArticle = {
    news_item: Article[]
}

export type ArticleList = {
    total_count: number,
    item_count: number,
    item: {
        article_id: string,
        content: {
            news_item: Article[]
        },
        update_time: number,
    }
}