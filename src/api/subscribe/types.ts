import { OfficialResponse } from '../../types'

export type AddParam = {
    tid: string,
    kidList: number[],
    sceneDesc: string,
}

export type AddResponse = OfficialResponse & {
    priTmplId: string
}

export type GetCategory = OfficialResponse & {
    data: {
        id: number,
        name: string,
    }[],
}

export type GetKeywords = OfficialResponse & {
    data: {
        kid: number,
        name: string,
        example: string,
        rule: string,
    }[],
}

export type GetPubTemplates = OfficialResponse & {
    count: number,
    data: {
        tid: number,
        title: string,
        type: number,
        categoryId: string,
    }[],
}

export type GetTemplates = OfficialResponse & {
    data: {
        priTmplId: string,
        title: string,
        content: string,
        example: string,
        type: number,
    }[],
}

export type Send = {
    touser: string,
    template_id: string,
    page?: string,
    miniprogram?: {
        appid: string,
        pagepath: string,
    },
    data: Record<string, {
        value: any,
    }>
}