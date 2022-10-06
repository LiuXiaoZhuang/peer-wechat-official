import { AccessToken } from './types';
import { Base } from './api/base';
import { OpenApi } from './api/open-api';
import { Menu } from './api/menu';
import { Receive } from './api/receive';
import { Reply } from './api/reply';
import { Template } from './api/template';
import { Subscribe } from './api/subscribe';
export declare type Options = {
    getAccessToken: AccessToken;
};
export default class Client {
    private appID;
    private appSecret;
    private util;
    base: Base;
    openApi: OpenApi;
    menu: Menu;
    receive: Receive;
    reply: Reply;
    template: Template;
    subscribe: Subscribe;
    constructor(appID: string, appSecret: string, options?: Options | null);
}
