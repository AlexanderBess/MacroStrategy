export default {
    setCoinsData(state, payload) {
        state.coinsData = payload;
    },
    setCoinsPrice(state, payload) {
        state.coinsPrice = {
            BTC: payload[0].USD,
            ETH: payload[1].USD,
            USDT: payload[2].USD,
            LTC: payload[3].USD,
            BNB: payload[4].USD,
            TRX: payload[5].USD,
            ADA: payload[6].USD,
            XRP: payload[7].USD
        };
    }
}
