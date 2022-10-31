import { Util } from '../../util';
import { OfficialResponse } from '../../types';
import { MenuParam, GetCurrentSelfmenuInfo, CustomMenu, AddConditional, TrymatchConditional, GetMenu } from './types';
export declare class Menu {
    private appID;
    private appSecret;
    private util;
    constructor(appID: string, appSecret: string, util: Util);
    create(data: MenuParam): Promise<import("../../types").Response<OfficialResponse, OfficialResponse>>;
    getCurrentSelfmenuInfo(): Promise<import("../../types").Response<GetCurrentSelfmenuInfo, OfficialResponse>>;
    delete(): Promise<import("../../types").Response<OfficialResponse, OfficialResponse>>;
    addConditional(data: CustomMenu): Promise<import("../../types").Response<AddConditional, OfficialResponse>>;
    delConditional(menuID: string): Promise<import("../../types").Response<OfficialResponse, OfficialResponse>>;
    trymatchConditional(userID: string): Promise<import("../../types").Response<TrymatchConditional, OfficialResponse>>;
    getMenu(): Promise<import("../../types").Response<GetMenu, OfficialResponse>>;
}
