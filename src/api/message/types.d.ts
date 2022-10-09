import { Stream } from 'stream'
import { OfficialResponse } from '../../types'
import { Readable } from 'stream';

type TextMessage = {
    msgtype: 'text',
    text: {
        content: string
    },
}

type MpnewsMessage = {
    msgtype: 'mpnews',
    mpnews: {
        media_id: string
    },
    send_ignore_reprint: number,
}

type VoiceMessage = {
    msgtype: 'voice',
    voice: {
        media_id: string
    },
}

type ImageMessage = {
    msgtype: 'image',
    images: {
        media_ids: string[],
        recommend?: string,
        need_open_comment?: number,
        only_fans_can_comment?: number,
    },
}

type VideoMessage = {
    msgtype: 'mpvideo',
    mpvideo: {
        media_id: string
    },
}

type WxcardMessage = {
    msgtype: 'wxcard',
    wxcard: {
        card_id: string
    },
}

type Message = TextMessage | MpnewsMessage | VoiceMessage | ImageMessage | VideoMessage | WxcardMessage

export type SendWithTagParam = Message & {
    filter: {
        is_to_all?: boolean,
        tag_id?: number
    },
    clientmsgid?: string,
}

export type SendWithOpenIDParam = Message & {
    touser: string[],
    clientmsgid?: string,
}

export type SendWithPreviewParam = Message & {
    touser: string,
    clientmsgid?: string,
}

export type SendResponse = OfficialResponse & {
    type?: 'image' | 'voice' | 'video' | 'thumb' | 'news',
    msg_id: number,
    msg_data_id: number,
}

export type GetStatus = {
    msg_id: number,
    msg_status: 'SEND_SUCCESS' | 'SENDING' | 'SEND_FAIL' | 'DELETE',
}