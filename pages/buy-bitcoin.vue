<template>
<div class="content">
  <div class="calculator">
    <div class="calculator__form form__style">
      <div class="calculator__inputs">
        <div class="form__title">Payment form</div>
        <div class="form__input-block">
          <span class="form__input-label">Amount of investment (from 50$ to 5000$)</span>
          <input
              v-model="customValue"
              :class="showError ? 'form__input_error' : ''"
              class="form__input"
              @change="calculatedPrice"/>
          <span class="ctm-input ctm-input__value" v-if="!showError">$ {{ coinsPrice[customCoinType.name] * customValue }}</span>
          <span class="ctm-input ctm-input__error" v-show="showError">{{ errorText }}</span>
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
      <div class="calculator__results">
        <div
            v-for="item in calculationResults"
            class="results__result-block">
          <span class="form__text form__text_grey">{{ item.name }}</span>
          <span class="form__text form__text_default">{{ item.value }}</span>
        </div>
      </div>
      <button class="button button__red" @click="openBuyBitcoin()">Buy Bitcoin</button>
    </div>
    <div class="discount-info form__style">
      <div class="discount-info__header">
        <span class="discount-info__title form__title">How to increase the discount</span>
        <div class="discount-info__tabs">
          <span class="discount-info__tab discount-info__tab_active">1. Connect wallet</span>
          <span class="discount-info__tab">2. Subscribe to Twitter</span>
        </div>
        <span class="discount-info__description form__text form__text_grey">Connect the wallet from which you would like to purchase the desired amount of BTC. </span>
        <button class="button button__white connectButton">Connect Wallet</button>
      </div>
    </div>
    <BuyBitcoin
        v-if="showBuyBitcoin"
        @close="closeBuyBitcoin"/>
  </div>
</div>
</template>

<script>
import CustomSelect from "/components/customDD";
import BuyBitcoin from "/components/modals/buyBitcoin";
import {mapGetters} from "vuex";
export default {
  name: "buy-bitcoin",
  components: {
    CustomSelect,
    BuyBitcoin
  },
  data() {
    return {
      showBuyBitcoin: false,
      errorText: '',
      defaultSelector: {
        name:'ETH',
        icon: require('assets/img/icon/ETH.svg')
      },
      showError: false,
      customValue: 0.1,
      calcBTC: 0.000001,
      customCoinType: {
        name: 'ETH'
      },
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
          value: '...loading'
        },
        {
          name: 'Your discount:',
          value: '27%'
        },
        {
          name: 'You will invest:',
          value: '0.001 ETH'
        },
        {
          name: 'You will get:',
          value: '...loading'
        }
      ]
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
      this.calculationResults[3].value = this.btcPrice();
    },
    calculatedPrice() {
      this.formingResults();
    },
    btcPrice() {
      const value = ((this.coinsPrice[this.customCoinType.name] * this.customValue) + ((this.coinsPrice[this.customCoinType.name] * this.customValue) * 0.27)) / this.coinsPrice.BTC;
      return `${value.toFixed(8)} BTC`;
    },
    openBuyBitcoin() {
      this.showBuyBitcoin = !this.showDiscount;
    },
    closeBuyBitcoin() {
      this.showBuyBitcoin = false;
    },
    formingResults() {
      this.calculationResults[0].value = `$${this.coinsPrice.BTC}`;
      this.calculationResults[2].value = `${this.customValue} ${this.customCoinType.name}`;
      this.calculationResults[3].value = this.btcPrice();
    }
  },
  watch: {
    coinsPrice: {
      handler() {
        this.formingResults();
      }
    },
    customValue: {
      handler() {
        this.customValue = this.customValue.replace(/[^.\d]+/g,"").replace( /^([^\.]*\.)|\./g, '$1' );
        this.formingResults();
        const dollarValue = this.coinsPrice[this.customCoinType.name] * this.customValue;
        if (dollarValue < 50) {
          this.showError = true;
          this.errorText = 'You entered an amount less than $50'
        } else if (dollarValue > 5000) {
          this.showError = true;
          this.errorText = 'You entered an amount greater than $5000'
        } else if (this.showError) {
          this.showError = false;
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  padding-top: 32px;
}
.calculator {
  display: flex;
  gap: 32px;
  width: 100%;
  &__inputs {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  &__results {
    display:flex;
    flex-wrap: wrap;
    gap: 16px;
    padding: 20px 0;

    border-top: 2px solid var(--bg-border, rgba(108, 128, 147, 0.25));
    border-bottom: 2px solid var(--bg-border, rgba(108, 128, 147, 0.25));
  }
}
.results {
  &__result-block {
    width: 48%;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
}
.form {
  &__input {
    padding: 12px 24px;
    border-radius: 12px 12px 16px 16px;
    border: 2px solid var(--bg-border, rgba(108, 128, 147, 0.25));

    color: var(--typo-primary, #171A1C);
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    &_error {
      border: 2px solid rgba(217, 35, 46, 0.5);
    }
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
  &__style {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 32px;

    border-radius: 32px;
    background: var(--bg-main, #FFF);
    box-shadow: 0px 2px 8px 0px rgba(72, 88, 96, 0.10), 0px 2px 4px 0px rgba(72, 88, 96, 0.10), 0px 1px 8px 0px rgba(72, 88, 96, 0.10);
  }
  &__title {
    color: var(--typo-primary, #171A1C);

    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
  }
  &__text {
    font-size: 20px;
    line-height: 32px;
    &_grey {
      color: var(--typo-secondary, #6C8093);
      font-style: normal;
    }
    &_default {
      color: var(--typo-primary, #171A1C);
      font-style: normal;
      font-weight: 600;
    }
  }
}
.ctm-input {
  padding-left: 10px;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  &__error {
    color: var(--typo-brand, #D9232E);
  }
  &__value {
    color: #6C8093;
  }
}
.discount-info {
  height: max-content;
  &__header {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  &__tabs {
    display: flex;
    gap: 8px;
  }
  &__tab {
    width: 100%;
    padding: 12px 12px 8px 12px;

    color: var(--typo-ghost, rgba(138, 153, 168, 0.70));
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;

    border-bottom: 2px solid var(--bg-border, rgba(108, 128, 147, 0.25));
    &_active {
      color: var(--typo-brand, #D9232E);
      border-bottom: 2px solid #D9232E;
    }
  }
  &__description {
    margin-top: 12px;
    padding-bottom: 20px;
    border-bottom: 2px solid var(--bg-border, rgba(108, 128, 147, 0.25));
  }
}
.button {
  padding: 12px 24px;
  border-radius: 12px;
  border: 0;
  &__red {
    width: max-content;
    color: var(--control-primary-typo, #FFF);
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;

    background: var(--control-primary-bg-default, #D9232E);
  }
  &__red:hover {
    background: var(--control-primary-bg-hover, #E14750);
  }
  &__white {
    margin-top: 20px;
    width: max-content;
    padding: 8px 16px;
    background: var(--bg-main, #FFF);
    border-radius: 8px;
    border: 2px solid var(--control-secondary-border-default, #D9232E);

    color: var(--control-secondary-typo, #D9232E);
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }
  &__white:hover {
    background: var(--control-ghost-bg-hover, #E3E5E8);
  }
}
@include _991 {
  .content {
    padding: 32px 16px 72px 16px;
  }
  .calculator {
    flex-direction: column;
  }
}
@include _575 {
  .calculator {
    &__form {
      padding: 24px 16px;
    }
  }
  .discount-info {
    padding: 24px 16px
  }
}
</style>
