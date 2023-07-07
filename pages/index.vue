<template>
  <div class="content">
    <div class="content__block content__block_first">
      <div class="content__banner content__banner_first">
        <div class="banner__info-block">
          <div class="banner__text">
            <span class="banner__title">Invest in Bitcoin with MicroStrategy</span>
            <span class="banner__desc">MicroStrategy allows you to buy Bitcoin at a lower price and make a profit from it</span>
          </div>
          <div class="banner__buttons">
            <button
                class="banner__button"
              @click="$router.push('/buy-bitcoin')">Get started</button>
            <a
               href="https://twitter.com/microstrategy"
               target="_blank">
              <img src="~assets/img/icon/TwitterRed.svg"/>
            </a>
            <a
               href="https://youtube.com/@microstrategy"
               target="_blank">
              <img src="~assets/img/icon/YoutubeRed.svg"/>
            </a>
            <a
               href="https://www.tradingview.com/symbols/NASDAQ-MSTR/"
               target="_blank">
              <img src="~assets/img/icon/TrandingViewRed.svg"/>
            </a>
          </div>
        </div>
        <img class="banner__image" src="~assets/img/app/banner.png" alt="banner"/>
      </div>
<!--      <div class="content__crypto-line">-->
<!--        <div class="marquee-container">-->
<!--          <p class="marquee">-->
<!--            <span v-for="item in coinsData">-->
<!--              {{item}}-->
<!--            </span>-->
<!--          </p>-->
<!--        </div>-->
<!--      </div>-->
    </div>
    <div class="content__block">
      <div class="content__32flex">
        <div class="default__info-block default__info-block_column">
          <img src="~assets/img/app/bitcoinBig.png" alt="bitcoin"/>
          <div class="info-block__text info-block__text_column">
            <div class="info-block__title">Bitcoin purchase</div>
            <div class="info-block__desc">Our investment project MicroStrategy allows everyone to snag discounted Bitcoin before the bull cycle hits!</div>
          </div>
        </div>
        <div class="content__32flex content__32flex_column">
          <div class="default__info-block">
            <img src="~assets/img/app/dollarBig.png" alt="dollars"/>
            <div class="info-block__text info-block__text_column">
              <div class="info-block__title">Earning method</div>
              <div class="info-block__desc">By purchasing Bitcoin from MicroStrategy, you can sell it at the actual market price on the exchanges we work with and make a profit from it!</div>
            </div>
          </div>
          <div class="default__info-block">
            <img src="~assets/img/app/twoLinesBig.png" alt="twoLines"/>
            <div class="info-block__text info-block__text_column">
              <div class="info-block__title">Significant growth of Bitcoin</div>
              <div class="info-block__desc">We are forecasting Bitcoin to reach $100,000 by the end of this year and offering the opportunity for advantageous purchases right now!</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content__block content__block_platforms-img">
      <img class="content__platform-img" src="~assets/img/app/coinbase.png" alt="coinbase"/>
      <img class="content__platform-img" src="~assets/img/app/binance.png" alt="binance"/>
      <img class="content__platform-img" src="~assets/img/app/bitmex.png" alt="bitmex"/>
      <img class="content__platform-img" src="~assets/img/app/bybit.png" alt="bybit"/>
    </div>
    <div class="content__block">
      <div class="content__banner content__banner_about-us content__banner_column">
        <div class="banner__head">
          <span class="banner__title">About us</span>
        </div>
        <div class="banner__body">
          <div class="banner__descriptions">
            <span class="banner__description">Our analysts predict a rapid growth of Bitcoin, and we are currently investing maximum resources into it to expand our company.</span>
            <span class="banner__description">Additionally, our task is to increase the number of investors in cryptocurrency from our microstrategy community.</span>
          </div>
          <div class="banner__red-block">
            <div class="red-block__content">
              <span class="red-block__title">12 333 BTC</span>
              <span class="red-block__desc">The latest investment by our company in Bitcoin</span>
            </div>
            <div class="red-block__content">
              <span class="red-block__title">2 000 BTC</span>
              <span class="red-block__desc">An investment for subscribers to strengthen the community</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content__block content__block_follow-us">
      <div class="content__text-block">
        <span class="content__title">Follow us</span>
        <span class="content__desc">Subscribe to stay informed about all the latest announcements</span>
      </div>
      <div class="content__cards content__cards_column">
        <a
            href="https://twitter.com/microstrategy"
            target="_blank"
            class="content__card">
          <img src="~assets/img/app/twitter.png"/>
          <div class="card__text-block">
            <span class="card__title">Twitter</span>
            <span class="card__desc">In our Official Twitter, you can see the latest news related to the MicroStrategy project and stay up to date with all the events!</span>
          </div>
        </a>
        <div class="content__cards">
          <a
              href="https://youtube.com/@microstrategy"
              target="_blank"
              class="content__card content__card_mini">
            <img src="~assets/img/app/youtube.png"/>
            <div class="card__text-block">
              <span class="card__title">Youtube</span>
              <span class="card__desc">Watch the latest interviews and forecasts from analysts on our channel</span>
            </div>
          </a>
          <a
              href="https://www.tradingview.com/symbols/NASDAQ-MSTR/"
              target="_blank"
              class="content__card content__card_mini">
            <img src="~assets/img/app/traiding.png"/>
            <div class="card__text-block">
              <span class="card__title">TraidingView</span>
              <span class="card__desc">Follow our assets on the TradingView platform.</span>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="content__block content__block_calculator">
      <div class="calculator__form">
        <div class="form__title">Calculator</div>
        <div class="form__input-block">
          <span class="form__input-label">Amount of investment</span>
          <input
              v-model="customValue"
              class="form__input"
              @change="calculatedPrice"/>
        </div>
        <div class="form__input-block">
          <span class="form__input-label">Currency of purchase</span>
          <CustomSelect
              :options="coinsForDD"
              :default="defaultSelector"
              class="select"
              @input="displayToKey($event)"
          />
        </div>
      </div>
      <div class="calculator__results-block">
        <div class="results-block__info">
          <span class="results-block__title">Calculation results</span>
          <div
              v-for="item in calculationResults"
              class="results-block__data">
            <span class="results-block__name">{{item.name}}</span>
            <span class="results-block__value">{{item.value}}</span>
          </div>
        </div>
        <div class="results-block__result">
          <span class="results-block__name">You will get:</span>
          <div class="results-block__bigValue"><span class="bigValue">{{ calcBTC }}</span><span>BTC</span></div>
        </div>
        <div class="results-block__buttons">
          <button
            class="button button__red"
            @click="openBuyBitcoin()">Buy bitcoin</button>
          <button
            class="button button__white"
            @click="openDiscount()">Increase the discount<img src="~assets/img/ui/Arrow-Right.svg"/></button>
        </div>
      </div>
    </div>
    <div class="content__block content__block_news">
      <div class="news__head">
        <span class="content__title">News</span>
        <nuxt-link class="news__view-all" to="/news">
          <span class="news__text-link">All news</span>
          <img src="~assets/img/ui/Arrow-Right.svg"/>
        </nuxt-link>
      </div>
      <div class="news__image-head">
        <span class="image-head__text">Bitcoin is a bank in cyberspace, run by incorruptible software, offering a global, affordable, simple, & secure savings account to billions of people that don't have the option or desire to run their own hedge fund.</span>
        <a class="news__view-all" target="_blank" href="https://www.youtube.com/watch?v=vveGfIfoDkc&ab_channel=OnlyTheSAVVY">
          <span class="news__view-all-text">Watch the video</span>
          <img style="width: 24px; height: 24px;" src="~assets/img/ui/Arrow-Right.svg"/>
        </a>
      </div>
      <div class="news__content">
        <div class="news__twit">
          <blockquote class="twitter-tweet">
            <p lang="en" dir="ltr">MicroStrategy has acquired an additional 12,333 BTC for ~$347.0 million at an average price of $28,136 per <a href="https://twitter.com/hashtag/bitcoin?src=hash&amp;ref_src=twsrc%5Etfw">#bitcoin</a>. As of 6/27/23 <a href="https://twitter.com/MicroStrategy?ref_src=twsrc%5Etfw">@MicroStrategy</a> hodls 152,333 <a href="https://twitter.com/search?q=%24BTC&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$BTC</a> acquired for ~$4.52 billion at an average price of $29,668 per bitcoin. <a href="https://twitter.com/search?q=%24MSTR&amp;src=ctag&amp;ref_src=twsrc%5Etfw">$MSTR</a> <a href="https://t.co/joHo1gEnR0">https://t.co/joHo1gEnR0</a>
            </p>&mdash; Michael Saylor⚡️ (@saylor) <a href="https://twitter.com/saylor/status/1674025857063571456?ref_src=twsrc%5Etfw">June 28, 2023</a>
          </blockquote>
        </div>
        <div class="news__container news__container_small">
          <div class="news__card news__card_big">
            <newsCard
                :card="specialCard"
                mode="big"/>
          </div>
          <div
              v-for="item in newsArrayOne"
              class="news__card news__card_small">
            <newsCard
              :card="item"
              mode="small"/>
          </div>
        </div>
      </div>
    </div>
    <DiscountModal
        v-if="showDiscount"
        @close="closeDiscount"/>
    <BuyBitcoin
      v-if="showBuyBitcoin"
      @close="closeBuyBitcoin"/>
  </div>
</template>

<script>

import newsCard from "/components/newsCard"
import CustomSelect from "/components/customDD"
import DiscountModal from "/components/modals/discount"
import {mapGetters} from "vuex";
import Discount from "/components/modals/discount";
import BuyBitcoin from "/components/modals/buyBitcoin";

export default {
  name: 'Main',
  components: {
    Discount,
    newsCard,
    DiscountModal,
    BuyBitcoin,
    CustomSelect
  },
  data() {
    return {
      showDiscount: false,
      showBuyBitcoin: false,
      defaultSelector: {
        name:'ETH',
        icon: require('assets/img/icon/ETH.svg')
      },
      customValue: 0.001,
      calcBTC: 0.000001,
      customCoinType: {
        name: 'ETH'
      },
      coinsLine: [
        {
          icon: '',
          price: '$30000'
        },
      ],
      coinsForDD: [
        {
          name: 'ETH',
          icon: require('assets/img/icon/ETH.svg'),
          fullname: 'Ethereum'
        },
        {
          name: 'LTC',
          icon: require('assets/img/icon/LTC.svg'),
          fullname: 'Litecoin'
        },
        {
          name: 'USDT',
          icon: require('assets/img/icon/USDT.svg'),
          fullname: 'Tether'
        },
        {
          name: 'BNB',
          icon: require('assets/img/icon/BNB.svg'),
          fullname: 'Binance Coin'
        },
        {
          name: 'ADA',
          icon: require('assets/img/icon/ADA.svg'),
          fullname: 'Cardano'
        },
        {
          name: 'TRX',
          icon: require('assets/img/icon/TRX.svg'),
          fullname: 'TRON'
        },
        {
          name: 'XRP',
          icon: require('assets/img/icon/XRP.svg'),
          fullname: 'XRP'
        }
      ],
      calculationResults: [
        {
          name: 'Bitcoin exchange rate:',
          value: '$30 000'
        },
        {
          name: 'Your discount:',
          value: '27%'
        },
        {
          name: 'You will invest:',
          value: '0.001 ETH'
        }
      ],
      newsArrayOne: [
        {
          img: require("assets/img/news/1.png"),
          link: 'https://twitter.com/saylor/status/1670478311632302080',
          author: 'Bloomberg HT',
          title: 'The Appeal Of Bitcoin',
          date: 'Jun 18, 2023'
        },
        {
          img: require("assets/img/news/2.png"),
          link: 'https://twitter.com/saylor/status/1668681012115546120',
          author: 'Bloomberg',
          title: 'Regulatory Clarity Is Going To Drive Bitcoin Adoption',
          date: 'Jun 13, 2023'
        }
      ],
      specialCard: {
        img: require("assets/img/news/5.png"),
        link: 'https://www.youtube.com/watch?v=v4na2pycrcc',
        author: 'Peter H. Diamandis',
        title: 'The Future Is Bitcoin',
        date: 'Nov 3, 2022'
      }
    }
  },
  computed: {
    ...mapGetters({
      coinsData: 'getCoinsData',
      coinsPrice: 'getCoinsPrice'
    })
  },
  async beforeMount() {
    await this.$store.dispatch('getCoinsData');
    await this.$store.dispatch('getCoinsPrice');
  },
  methods: {
    displayToKey(value) {
      this.customCoinType = value;
      this.calculationResults[2].value = `${this.customValue} ${this.customCoinType.name}`;
      this.btcPrice();
    },
    calculatedPrice() {
      this.calculationResults[0].value = `$${this.coinsPrice.BTC}` || '30000';
      this.calculationResults[2].value = `${this.customValue} ${this.customCoinType.name}` || 'asd';
      this.btcPrice();
    },
    btcPrice() {
      this.calcBTC = ((this.coinsPrice[this.customCoinType.name] * this.customValue) + ((this.coinsPrice[this.customCoinType.name] * this.customValue) * 0.27)) / this.coinsPrice.BTC;
    },
    openDiscount() {
      this.showDiscount = !this.showDiscount;
    },
    openBuyBitcoin() {
      this.showBuyBitcoin = !this.showDiscount;
    },
    closeDiscount() {
      this.showDiscount = false;
    },
    closeBuyBitcoin() {
      this.showBuyBitcoin = false;
    }
  },
  watch: {
    coinsPrice: {
      handler() {
        this.calculationResults[0].value = `$${this.coinsPrice.BTC}`;
        this.calculationResults[2].value = `${this.customValue} ${this.customCoinType.name}`;
        this.btcPrice();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  gap: 144px;
  padding-top: 32px;
  padding-bottom: 144px;
  &__32flex {
    width: 100%;
    display: flex;
    gap: 32px;
    &_column {
      flex-direction: column;
    }
  }
  &__text-block {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  &__title {
    color: var(--typo-primary, #171A1C);

    /* Header/Header H2 */
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 64px;
  }
  &__desc {
    color: var(--typo-secondary, #6C8093);

    /* Text/Big Text Regular */
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
  }
  &__block {
    display: flex;
    width: 100%;
    gap: 16px;
    &_first {
      flex-direction: column;
    }
    &_platforms-img {
      align-items: center;
      justify-content: space-between;
    }
    &_news {
      flex-direction: column;
      gap: 32px;
    }
    &_calculator {
      gap: 32px;
    }
  }
  &__cards {
    width: 100%;
    max-width: 687px;
    display: flex;
    gap: 32px;
    &_column {
      flex-direction: column;
    }
  }
  &__card {
    text-decoration: none;
    cursor: pointer;
    padding: 16px 24px;
    display: flex;
    align-items: flex-start;
    gap: 24px;
    border-radius: 24px;
    background: var(--bg-main, #FFF);
    box-shadow: 0px 2px 8px 0px rgba(72, 88, 96, 0.10), 0px 2px 4px 0px rgba(72, 88, 96, 0.10), 0px 1px 8px 0px rgba(72, 88, 96, 0.10);
    &_mini {
      width: 50%;
    }
  }
  &__card:hover {
    .card__title {
      border-bottom: 1px solid #171A1C;
    }
  }
  &__banner {
    width: 100%;
    height: 500px;

    display: flex;
    justify-content: space-between;
    padding: 40px 25px 0 56px;
    align-items: center;

    border-radius: 40px;
    background: var(--bg-secondary, #F3F5F6);
    &_column {
      height: 100%;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      padding: 48px 56px;
      gap: 32px;
    }
  }
  &__logo {
    width: 56px;
  }
  &__text {
    text-align: center;
    &_big {
      font-weight: 700;
      font-size: 22px;
      line-height: 26px;
    }
    &_small {
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
    }
    &_description {
      text-align: start;
    }
  }
  &__button {
    width: 100%;
  }
  &__descriptions {
    display: flex;
    gap: 12px;
    align-items: flex-start;
  }
  &__platform-img {
    height: 56px;
  }
}
.banner {
  &__buttons {
    display: flex;
    align-items: baseline;
    gap: 16px;
  }
  &__button {
    padding: 12px 24px;
    border-radius: 12px;
    color: var(--control-primary-typo, #FFF);
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    border: none;
    background: var(--control-primary-bg-default, #D9232E);
  }
  &__info-block {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
  &__text {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  &__title {
    color: var(--typo-primary, #171A1C);

    /* Header/Header H1 */
    font-size: 56px;
    font-style: normal;
    font-weight: 700;
    line-height: 72px;
  }
  &__desc {
    color: var(--typo-secondary, #6C8093);

    /* Text/Big Text Regular */
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
  }
  &__body {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  &__descriptions {
    max-width: 528px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;

    color: var(--typo-primary, #171A1C);

    /* Text/Big Text Regular */
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
  }
  &__red-block {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
}
.default {
  &__info-block {
    display: flex;
    gap: 24px;
    width: 100%;
    padding: 24px 32px;

    border-radius: 24px;
    background: var(--bg-main, #FFF);
    box-shadow: 0px 2px 4px 0px rgba(72, 88, 96, 0.10), 0px 4px 4px 0px rgba(72, 88, 96, 0.10), 0px 1px 8px 0px rgba(72, 88, 96, 0.10);
    &_column {
      max-width: 380px;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
    }
  }
}
.info-block {
  &__text {
    display: flex;
    justify-content: space-between;
    gap: 16px;
    &_column {
      flex-direction: column;
    }
  }
  &__title {
    color: var(--typo-primary, #171A1C);

    /* Header/Header H4 */
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
  }
  &__desc {
    color: var(--typo-secondary, #6C8093);

    /* Text/Small Text Regular */
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
}
.red-block {
  &__content {
    display: flex;
    flex-direction: column;
  }
  &__title {
    color: var(--typo-brand, #D9232E);
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: 80px;
  }
  &__desc {
    color: var(--typo-secondary, #6C8093);

    /* Text/Small Text Regular */
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
}
.card {
  &__text-block {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  &__title {
    width: fit-content;
    border-bottom: 1px solid #FFF;
    color: var(--typo-primary, #171A1C);
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
  }
  &__desc {
    color: var(--typo-secondary, #6C8093);

    /* Caption/Caption Big Regular */
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
}
.news {
  &__image-head {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    width: 100%;
    height: 280px;
    border-radius: 24px;
    padding: 144px 32px 40px 32px;
    background: url('assets/img/news/background.jpg') no-repeat;
    background-size: cover;
  }
  &__head {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
  }
  &__text-link {
    color: var(--control-ghost-typo, #D9232E);
    font-size: 20px;

    font-style: normal;
    font-weight: 700;
    line-height: 32px;
  }
  &__view-all {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 16px;
    border-radius: 8px;
    background: var(--control-ghost-bg-default, #FFF);

    text-decoration: none;
  }
  &__view-all-text {
    padding-top: 3px;
    color: var(--control-ghost-typo, #D9232E);

    /* Button/Small Button Text */
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }
  &__content {
    display: flex;
    gap: 32px;
  }
  &__container {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
}
.image-head {
  &__text {
    max-width: 720px;
    color: var(--bg-main, #FFF);
    /* Text/Big Text Medium */
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
  }
}
.calculator {
  &__form {
    width: 100%;
    max-width: 487px;
    display: flex;
    flex-direction: column;
    height: max-content;
    gap: 16px;
    padding: 32px;
    border-radius: 32px;
    background: var(--bg-main, #FFF);
    box-shadow: 0px 2px 8px 0px rgba(72, 88, 96, 0.10), 0px 2px 4px 0px rgba(72, 88, 96, 0.10), 0px 1px 8px 0px rgba(72, 88, 96, 0.10);
  }
  &__results-block {
    width: 100%;
    max-width: 681px;
    display: flex;
    flex-direction: column;
    padding: 48px 56px;
    gap: 32px;
    border-radius: 32px;
    background: var(--bg-secondary, #F3F5F6);
    &__title {
      color: var(--typo-primary, #171A1C);

      /* Header/Header H2 */
      font-size: 48px;
      font-style: normal;
      font-weight: 700;
      line-height: 64px;
    }
  }
}
.form {
  &__title {
    color: var(--typo-primary, #171A1C);

    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 64px;
  }
  &__input {
    padding: 12px 24px;
    border-radius: 12px 12px 16px 16px;
    border: 2px solid var(--bg-border, rgba(108, 128, 147, 0.25));

    color: var(--typo-primary, #171A1C);
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
  }
  &__input-block {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  &__input-label {
    color: var(--typo-secondary, #6C8093);
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 32px;
  }
}
.results-block {
  &__info {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  &__result {
    display: flex;
    flex-direction: column;
  }
  &__title {
    color: var(--typo-primary, #171A1C);

    /* Header/Header H3 */
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
  }
  &__name {
    color: var(--typo-secondary, #6C8093);

    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
  }
  &__value {
    color: var(--typo-primary, #171A1C);

    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 32px;
  }
  &__bigValue {
    display: flex;
    gap: 6px;
    flex-wrap: nowrap;

    color: var(--typo-brand, #D9232E);

    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: 80px;
  }
  &__buttons {
    display: flex;
    gap: 24px;
  }
}
.bigValue {
  white-space: nowrap; /* Запрещаем перенос строк */
  overflow: hidden; /* Обрезаем все, что не помещается в область */
  text-overflow: ellipsis;
}
.button {
  padding: 12px 24px;
  border-radius: 12px;
  border: 0;
  &__red {
    color: var(--control-primary-typo, #FFF);
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;

    background: var(--control-primary-bg-default, #D9232E);
  }
  &__white {
    display: flex;

    color: var(--control-ghost-typo, #D9232E);
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;

    background: var(--control-ghost-bg-default, #FFF);
  }
}
.marquee-container{
  display: flex;
  align-items: center;
  background: #25284c;
  overflow: hidden;
}
.marquee{
  font-size: 100px;
  line-height: 1.3;
  font-family: sans-serif;
  padding: 24px 0;
  color: #fff;
  white-space: nowrap;
  animation: marquee 3.5s infinite linear; /* notice the infinite */
}
//.marquee:after{
//  content: "LONDON - PARIS - SYDNEY - TOKYO - NEW YORK - BERLIN - ROME";
//}
@keyframes marquee{
  0% {
    transform: translateX(0)
  }
  100% {
    transform: translateX(-50%)
  }
}
@include _1199 {
  .content {
    padding: 32px 16px 72px 16px;
  }
  .news {
    &__image-head {
      flex-direction: column;
      align-items: flex-start;
      padding: 72px 32px 40px 32px;
    }
  }
}
@include _991 {
  .content {
    gap: 96px;
    &__32flex {
      flex-direction: column;
    }
    &__desc {
      max-width: 486px;
    }
    &__block {
      flex-wrap: wrap;
      //&_follow-us {
      //  flex-direction: column;
      //}
      &_calculator {
        justify-content: center;
      }
    }
    &__cards {
      max-width: 100%;
    }
    &__banner {
      height: 333px;
      &_about-us {
        height: auto;
      }
    }
  }
  .default {
    &__info-block {
      align-items: flex-start;
      &_column {
        max-width: 100%;
        flex-direction: row;
        justify-content: flex-start;
        gap: 24px;
      }
    }
  }
  .banner {
    &__image {
      max-width: 368px;
      width: 100%;
    }
    &__title {
      font-size: 32px;
      font-weight: 700;
      line-height: 40px;
    }
    &__body {
      flex-direction: column;
      gap: 32px;
    }
    &__descriptions {
      max-width: 100%;
    }
    &__red-block {
      flex-direction: row;
      justify-content: space-between;
    }
  }
  .calculator {
    &__form {
      max-width: 100%;
    }
    &__results-block {
      max-width: 836px;
    }
  }
  .news {
    &__content {
      flex-direction: column;
    }
  }
}
@include _767 {
  .content {
    &__banner_first {
      height: auto;
      align-items: flex-end;
    }
  }
  .banner {
    &__info-block {
      padding-bottom: 20px;
    }
    &__red-block {
      flex-direction: column;
    }
  }
  .calculator {
    &__results-block {
      max-width: 680px;
    }
  }
  .news {
    &__image-head {
      gap: 32px;
      padding: 32PX 24PX;
    }
  }
  .button {
    &__white {
      align-items: center;
    }
  }
}
@include _575 {
  .default {
    &__info-block {
      padding: 16px;
    }
  }
  .content {
    &__banner {
      padding: 24px 16px;
      &_first {
        padding: 24px 16px 0 16px;
        flex-direction: column;
        align-items: center;
        gap: 8px;
      }
    }
    &__cards {
      flex-direction: column;
    }
    &__card {
      padding: 16px;
      &_mini {
        width: 100%;
      }
    }
  }
  .results-block {
    &__buttons {
      flex-direction: column;
    }
    &__bigValue {
      font-size: 36px;
    }
  }
  .calculator {
    &__form {
      padding: 24px 16px;
    }
    &__results-block {
      max-width: 480px;
      padding: 24px 16px;
    }
  }
  .banner {
    &__buttons {
      justify-content: space-between;
    }
  }
  .button {
    justify-content: center;
    padding: 24px 12px;
  }
  .news {
    &__container {
      align-items: center;
    }
    &__image-head {
      height: auto;
    }
    &__card {
      &_small {
        display: none;
      }
      &_big {
        max-width: 460px;
      }
    }
  }
}
@include _480 {
  .content {
    &__block {
      &_platforms-img {
        flex-direction: column;
        align-items: center;
      }
    }
  }
  .calculator {
    &__results-block {
      max-width: 350px;
    }
  }
  .news {
    &__card {
      &_big {
        max-width: 370px;
      }
    }
  }
  .red-block {
    &__title {
      font-size: 46px;
    }
  }
}
@include _380 {
  .calculator {
    &__results-block {
      max-width: 340px;
    }
  }
  .news {
    &__card {
      &_big {
        max-width: 340px;
      }
    }
  }
}
</style>
