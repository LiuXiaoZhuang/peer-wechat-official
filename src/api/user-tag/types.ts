import { OfficialResponse } from '../../types'

export type CreateResponse = {
    tag: {
        id: number,
        name: string,
    }
}

export type ListResponse = {
    tags: {
        id: number,
        name: string,
        count: number,
    }
}

export type UserListResponse = {
    count: number
    data: {
        openid: string[]
    },  
    next_openid: string
}

export type UserTagsResponse = {
    tagid_list: number[]
}