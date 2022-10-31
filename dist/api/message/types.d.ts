import { OfficialResponse } from '../../types';
declare type TextMessage = {
    msgtype: 'text';
    text: {
        content: string;
    };
};
declare type MpnewsMessage = {
    msgtype: 'mpnews';
    mpnews: {
        media_id: string;
    };
    send_ignore_reprint: number;
};
declare type VoiceMessage = {
    msgtype: 'voice';
    voice: {
        media_id: string;
    };
};
declare type ImageMessage = {
    msgtype: 'image';
    images: {
        media_ids: string[];
        recommend?: string;
        need_open_comment?: number;
        only_fans_can_comment?: number;
    };
};
declare type VideoMessage = {
    msgtype: 'mpvideo';
    mpvideo: {
        media_id: string;
    };
};
declare type WxcardMessage = {
    msgtype: 'wxcard';
    wxcard: {
        card_id: string;
    };
};
declare type Message = TextMessage | MpnewsMessage | VoiceMessage | ImageMessage | VideoMessage | WxcardMessage;
export declare type SendWithTagParam = Message & {
    filter: {
        is_to_all?: boolean;
        tag_id?: number;
    };
    clientmsgid?: string;
};
export declare type SendWithOpenIDParam = Message & {
    touser: string[];
    clientmsgid?: string;
};
export declare type SendWithPreviewParam = Message & {
    touser: string;
    clientmsgid?: string;
};
export declare type SendResponse = OfficialResponse & {
    type?: 'image' | 'voice' | 'video' | 'thumb' | 'news';
    msg_id: number;
    msg_data_id: number;
};
export declare type GetStatus = {
    msg_id: number;
    msg_status: 'SEND_SUCCESS' | 'SENDING' | 'SEND_FAIL' | 'DELETE';
};
export {};
