<template>
  <div class="ctm-modal">
    <div class="discount-info form__style">
      <div class="discount-info__header">
        <span class="discount-info__title form__title">Increase in discount</span>
        <div class="discount-info__tabs">
          <span class="discount-info__tab discount-info__tab_active">1. Connect wallet</span>
          <span class="discount-info__tab">2. Subscribe to Twitter</span>
        </div>
        <span class="discount-info__description">Connect the wallet from which you would like to purchase the desired amount of BTC. </span>
        <div class="discount-info__buttons">
          <button class="button button__white" @click.prevent="close">Cancel</button>
          <button class="button button__red connectButton" @click.prevent="close">Connect Wallet</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "discount",
  methods: {
    close() {
      this.$emit('close');
    }
  }
}
</script>

<style lang="scss" scoped>
.ctm-modal {
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 10px;
  position: fixed;
  overflow: auto;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(#000000, .4);
  z-index: 999999;
  text-align: center;
  white-space: nowrap;
  font-size: 0;
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
.discount-info {
  height: max-content;
  text-align: start;
  max-width: 568px;
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
    color: var(--typo-primary, #171A1C);
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;

    white-space: normal;
    margin-top: 12px;
    padding-bottom: 20px;
    border-bottom: 2px solid var(--bg-border, rgba(108, 128, 147, 0.25));
  }
  &__buttons {
    display: flex;
    justify-content: flex-end;
    gap: 16px;
    margin-top: 16px;
  }
}
.button {
  padding: 12px 24px;
  border-radius: 12px;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  border: 0;
  &__red {
    width: max-content;
    color: var(--control-primary-typo, #FFF);
    background: var(--control-primary-bg-default, #D9232E);
  }
  &__red:hover {
    background: var(--control-primary-bg-hover, #E14750);
  }
  &__white {
    width: max-content;
    color: #D9232E;
    background: var(--bg-main, #FFF);
  }
  &__white:hover {
    background: var(--control-ghost-bg-hover, #E3E5E8);
  }
}
</style>
