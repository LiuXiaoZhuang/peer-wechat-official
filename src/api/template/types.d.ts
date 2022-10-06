import { OfficialResponse } from '../../types'

type Industry = {
    first_class: string,
    second_class: string,
}

export type GetIndustry = {
    primary_industry: Industry,
    secondary_industry: Industry,
}

export type Add = OfficialResponse & {
    template_id: string
}

export type GetTemplates = {
    template_list: {
        template_id: string,
        title: string,
        primary_industry: string,
        deputy_industry: string,
        content: string,
        example: string,
    }[]
}

export type SendParam = {
    touser: string,
    template_id: string,
    url?: string,
    miniprogram?: {
        appid: string,
        pagepath: string,
    },
    client_msg_id?: string,
    data: Record<string, {
        value: any,
        color?: string,
    }>
}

export type SendResponse = OfficialResponse & {
    msgid: number,
}