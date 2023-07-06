<template>
<div class="content">
  <div class="calculator">
    <div class="calculator__form form__style">
      <div class="calculator__inputs">
        <div class="form__title">Payment form</div>
        <input class="form__title"/>
        <input class="form__title"/>
      </div>
      <div class="calculator__results">
        <div
            v-for="item in calculationResults"
            class="results__result-block">
          <span>{{ item.name }}</span>
          <span>{{ item.value }}</span>
        </div>
      </div>
      <button>Buy Bitcoin</button>
    </div>
    <div class="discount-info form__style">
      <div class="discount-info__header">
        <span class="discount-info__title form__title">How to increase the discount</span>
        <div class="discount-info__tabs">
          <span>1. Connect wallet</span>
          <span>2. Subscribe to Twitter</span>
        </div>
        <span class="discount-info__description">Connect the wallet from which you would like to purchase the desired amount of BTC. </span>
        <button>Connect Wallet</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "buy-bitcoin",
  data() {
    return {
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
      ]
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
}
.form {
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

      font-size: 20px;
      font-style: normal;
      line-height: 32px;
    }
  }
}
</style>
