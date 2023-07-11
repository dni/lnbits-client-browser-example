import * as lnbits from '@lnbits/client-browser';

let key = "15dbed9c69eb498a8bb7db6d2b527d59";
let api_url = "https://legend.lnbits.com";

console.log("lnbits import", lnbits);

let config = new lnbits.Configuration({
    basePath: api_url,
    apiKey: key,
})

let api = new lnbits.CoreApi(config)
console.log("CoreApi", api);

api.tinyurlApiV1TinyurlPost({url: "https://600.wtf"}).then(data => {
    console.log("create a tinyurl", data);
    api.tinyurlApiV1TinyurlTinyurlIdGet({tinyurlId: data.id}).then(data => {
        console.log("get a tinyurl", data);
        api.tinyurlApiV1TinyurlTinyurlIdDelete({tinyurlId: data.id}).then(data => {
            console.log("delete a tinyurl", data);
        })
    })
})
