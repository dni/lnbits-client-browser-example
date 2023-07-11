import LnbitsClient from '@lnbits/client-browser';

let key = "15dbed9c69eb498a8bb7db6d2b527d59";
let api_url = "https://legend.lnbits.com";

let defaultClient = LnbitsClient.ApiClient.instance;
defaultClient.basePath = api_url;

// Configure API key authorization: APIKeyHeader
let APIKeyHeader = defaultClient.authentications['APIKeyHeader'];
APIKeyHeader.apiKey = key;

const request_handler = (fn, err_msg) => {
    return (error, data, res) => {
        if (error) {
            console.error(err_msg, error.status, error.message, res.text);
        } else {
            fn(data);
        }
    };
};
