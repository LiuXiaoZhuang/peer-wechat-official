import { Util } from './util'
import { AccessToken, JsapiTicket } from './types'

import { Base } from './api/base'
import { OpenApi } from './api/open-api'
import { Menu } from './api/menu'
import { Receive } from './api/receive'
import { Reply } from './api/reply'
import { Template } from './api/template'
import { Subscribe } from './api/subscribe'
import { Service } from './api/service'
import { Web } from './api/web'
import { Media } from './api/media'
import { Draft } from './api/draft'
import { Publish } from './api/publish'
import { Message } from './api/message'
import { Comment } from './api/comment'
import { User } from './api/user'
import { UserTag } from './api/user-tag'
import { UserBlack } from './api/user-black'
import { Qrcode } from './api/qrcode'
import { ShortKey } from './api/short-key'

export type Options = {
    getAccessToken?: AccessToken,
    getJsapiTicket?: JsapiTicket
}

export default class Client {

    public util: Util

    // 所有的接口
    public base: Base; // 基础
    public openApi: OpenApi; // openApi
    public menu: Menu; // 自定义菜单
    public receive: Receive; // 接收信息
    public reply: Reply; // 回复信息
    public template: Template; // 模板消息
    public subscribe: Subscribe; // 订阅消息
    public service: Service; // 客服
    public web: Web; // 网页相关
    public media: Media; // 素材相关
    public draft: Draft; // 草稿箱
    public publish: Publish // 发布
    public message: Message // 消息群发
    public comment: Comment // 群发文章评论
    public userTag: UserTag // 用户标签
    public user: User // 用户
    public userBlack: UserBlack // 用户黑名单
    public qrcode: Qrcode // 带参数二维码
    public shortKey: ShortKey // 短key

    constructor(private appID: string, private appSecret: string, options: Options = {}){
        this.util = new Util()
        if(options.getAccessToken){
            this.util.setAccessToken(options.getAccessToken)
        }
        if(options.getJsapiTicket){
            this.util.setJsapiTicket(options.getJsapiTicket)
        }

        // 这里实例化这些接口
        this.base = new Base(this.appID, this.appSecret, this.util)
        this.openApi = new OpenApi(this.appID, this.appSecret, this.util)
        this.menu = new Menu(this.appID, this.appSecret, this.util)
        this.receive = new Receive(this.appID, this.appSecret, this.util)
        this.reply = new Reply()
        this.template = new Template(this.appID, this.appSecret, this.util)
        this.subscribe = new Subscribe(this.appID, this.appSecret, this.util)
        this.service = new Service(this.appID, this.appSecret, this.util)
        this.web = new Web(this.appID, this.appSecret, this.util)
        this.media = new Media(this.appID, this.appSecret, this.util)
        this.draft = new Draft(this.appID, this.appSecret, this.util)
        this.publish = new Publish(this.appID, this.appSecret, this.util)
        this.message = new Message(this.appID, this.appSecret, this.util)
        this.comment = new Comment(this.appID, this.appSecret, this.util)
        this.userTag = new UserTag(this.appID, this.appSecret, this.util)
        this.user = new User(this.appID, this.appSecret, this.util)
        this.userBlack = new UserBlack(this.appID, this.appSecret, this.util)
        this.qrcode = new Qrcode(this.appID, this.appSecret, this.util)
        this.shortKey = new ShortKey(this.appID, this.appSecret, this.util)
    }
}