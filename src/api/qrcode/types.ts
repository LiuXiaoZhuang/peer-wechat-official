import { OfficialResponse } from '../../types'

type TmpScene = {
    expire_seconds?: number,
    action_name: 'QR_SCENE',
    action_info: {
        scene_id: number,
    },
}

type TmpStrScene = {
    expire_seconds?: number,
    action_name: 'QR_STR_SCENE',
    action_info: {
        scene_str: string,
    },
}

type ForeverScene = {
    action_name: 'QR_LIMIT_SCENE',
    action_info: {
        scene_id: number,
    },
}

type ForeverStrScene = {
    action_name: 'QR_LIMIT_STR_SCENE',
    action_info: {
        scene_str: string,
    },
}

export type CreateParam = TmpScene | TmpStrScene | ForeverScene | ForeverStrScene

export type CreateResponse = {
    ticket: string,
    expire_seconds?: number,
    url: string,
}