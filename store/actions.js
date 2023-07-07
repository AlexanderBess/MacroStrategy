export default {
    async getCoinsData({commit}) {
        try {
            console.log(process.env.API_KEY);
            const result = await this.$axios.$post(`/price?fsym=USD&tsyms=BTC,ETH,LTC,USDT,BNB,ADA,TRX,XRP&api_key=${process.env.API_KEY}`);
            commit('setCoinsData', result);
            return result;
        } catch (e) {
            console.error(e)
            return false;
        }
    },
    async getCoinsPrice({commit}) {
        await Promise.all([
            this.$axios.$post('/price?fsym=BTC&tsyms=USD'),
            this.$axios.$post('/price?fsym=ETH&tsyms=USD'),
            this.$axios.$post('/price?fsym=USDT&tsyms=USD'),
            this.$axios.$post('/price?fsym=LTC&tsyms=USD'),
            this.$axios.$post('/price?fsym=BNB&tsyms=USD'),
            this.$axios.$post('/price?fsym=TRX&tsyms=USD'),
            this.$axios.$post('/price?fsym=ADA&tsyms=USD'),
            this.$axios.$post('/price?fsym=XRP&tsyms=USD')
        ]).then(values => {
            commit('setCoinsPrice', values);
        });
    }
}
