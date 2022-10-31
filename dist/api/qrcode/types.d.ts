declare type TmpScene = {
    expire_seconds?: number;
    action_name: 'QR_SCENE';
    action_info: {
        scene_id: number;
    };
};
declare type TmpStrScene = {
    expire_seconds?: number;
    action_name: 'QR_STR_SCENE';
    action_info: {
        scene_str: string;
    };
};
declare type ForeverScene = {
    action_name: 'QR_LIMIT_SCENE';
    action_info: {
        scene_id: number;
    };
};
declare type ForeverStrScene = {
    action_name: 'QR_LIMIT_STR_SCENE';
    action_info: {
        scene_str: string;
    };
};
export declare type CreateParam = TmpScene | TmpStrScene | ForeverScene | ForeverStrScene;
export declare type CreateResponse = {
    ticket: string;
    expire_seconds?: number;
    url: string;
};
export {};
