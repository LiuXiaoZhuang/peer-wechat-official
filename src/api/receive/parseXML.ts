import * as xml2js from 'xml2js'

/**
 * 将xml2js解析出来的对象转换成直接可访问的对象
 */
export function formatMessage (result) {
    var message = {};
    if (typeof result === 'object') {
        for (var key in result) {
            if (!(result[key] instanceof Array) || result[key].length === 0) {
                continue;
            }
            if (result[key].length === 1) {
                var val = result[key][0];
                if (typeof val === 'object') {
                    message[key] = formatMessage(val);
                } else {
                    message[key] = (val || '').trim();
                }
            } else {
                message[key] = [];
                result[key].forEach(function (item) {
                    message[key].push(formatMessage(item));
                });
            }
        }
    }
    return message;
};

export async function parseXML (xml): Promise<any>{
    return new Promise((resolve, reject) => {
        xml2js.parseString(xml, { trim: true }, function (err, json) {
            if (err) {
                reject(err);
            } else {
                let res = formatMessage(json.xml)
                resolve(res);
            }
        });
    });
}