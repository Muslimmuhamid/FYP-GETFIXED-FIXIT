const api_urls = {
    paymentCanceled: 'http://192.168.20.81:3009/api/v2/tappayment/cancel',
    paymentSucces: 'http://192.168.20.81:3009/api/v2/tappayment/success',
    paymentGatewayRedirectGetUrl: 'http://192.168.20.81:3009/api/v2/tappayment/paymentGateway_GET',
    paymentGatewayRedirectPostUrl: 'http://192.168.20.81:3009/api/v2/tappayment/paymentGateway_POST'
}

module.exports = { api_urls }