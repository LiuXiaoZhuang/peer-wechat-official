import { OfficialResponse } from '../../types'

export type ListParam = {
    msg_data_id: number,
    index?: number,
    begin: number,
    count: number,
    type: number, // type=0 普通评论&精选评论 type=1 普通评论 type=2 精选评论
}

export type ListResponse = OfficialResponse & {
    total: number,
    comment: { 
	    user_comment_id: number,
		openid: string,
		create_time: number,
		content: string,
		comment_type: number,
		reply: { 
			content: string,
			create_time: number,
		} 
	}[] 
}

export type ActionCommentParam = {
    msg_data_id: number,
    index?: number,
    user_comment_id: number,
}

export type ReplyCommentParam = ActionCommentParam & {
    content: string
}