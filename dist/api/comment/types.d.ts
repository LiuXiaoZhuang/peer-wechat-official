import { OfficialResponse } from '../../types';
export declare type ListParam = {
    msg_data_id: number;
    index?: number;
    begin: number;
    count: number;
    type: number;
};
export declare type ListResponse = OfficialResponse & {
    total: number;
    comment: {
        user_comment_id: number;
        openid: string;
        create_time: number;
        content: string;
        comment_type: number;
        reply: {
            content: string;
            create_time: number;
        };
    }[];
};
export declare type ActionCommentParam = {
    msg_data_id: number;
    index?: number;
    user_comment_id: number;
};
export declare type ReplyCommentParam = ActionCommentParam & {
    content: string;
};
