import { Util } from './util'
import { AccessToken } from './types'

import { Base } from './api/base'
import { OpenApi } from './api/open-api'
import { Menu } from './api/menu'
import { Receive } from './api/receive'
import { Reply } from './api/reply'
import { Template } from './api/template'
import { Subscribe } from './api/subscribe'

export type Options = {
    getAccessToken: AccessToken
}

export default class Client {

    private util: Util

    // 所有的接口
    public base: Base
    public openApi: OpenApi
    public menu: Menu
    public receive: Receive
    public reply: Reply
    public template: Template
    public subscribe: Subscribe

    constructor(private appID: string, private appSecret: string, options: Options | null = null){
        this.util = new Util()
        if(options !== null){
            this.util.setAccessToken(options.getAccessToken)
        }

        // 这里实例化这些接口
        this.base = new Base(this.appID, this.appSecret, this.util)
        this.openApi = new OpenApi(this.appID, this.appSecret, this.util)
        this.menu = new Menu(this.appID, this.appSecret, this.util)
        this.receive = new Receive(this.appID, this.appSecret, this.util)
        this.reply = new Reply()
        this.template = new Template(this.appID, this.appSecret, this.util)
        this.subscribe = new Subscribe(this.appID, this.appSecret, this.util)
    }
}