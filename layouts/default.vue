<template>
  <div class="primary">
    <div class="primary__template template">
      <div class="template__header header">
        <iframe src="https://widget.coinlib.io/widget?type=horizontal_v2&amp;theme=light&amp;pref_coin_id=1505&amp;invert_hover=no" width="100%" height="36px" scrolling="auto" marginwidth="0" marginheight="0" frameborder="0" border="0" style="border:0;margin:0;padding:0;"></iframe>
        <div class="header__container">
          <nuxt-link
            class="header__title"
            to="/">
            <img src="~assets/img/icon/logo.png" alt="logo"/>
          </nuxt-link>
          <div class="header__links">
            <nuxt-link
                class="header__link"
                :class="$route.name === 'index' ? 'header__link_active' : ''"
                to="/">Discovery</nuxt-link>
            <nuxt-link
                class="header__link"
                :class="$route.name === 'buy-bitcoin' ? 'header__link_active' : ''"
                to="/buy-bitcoin">Buy Bitcoin</nuxt-link>
            <nuxt-link
                class="header__link"
                :class="$route.name === 'news' ? 'header__link_active' : ''"
                to="/news">News</nuxt-link>
          </div>
          <button class="button button_connect connectButton">Connect wallet</button>
<!--          <div class="container header__container-menu">-->
<!--            <div class="menu-burger__header">-->
<!--              <span></span>-->
<!--            </div>-->
<!--            <nav class="header__nav">-->
<!--              <ul class="menu header__menu">-->
<!--                <li>-->
<!--                  <nuxt-link-->
<!--                    class="header__link"-->
<!--                    :class="$route.name === 'index' ? 'header__link_active' : ''"-->
<!--                    to="/">Discovery</nuxt-link>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <nuxt-link-->
<!--                    class="header__link"-->
<!--                    :class="$route.name === 'buy-bitcoin' ? 'header__link_active' : ''"-->
<!--                    to="/buy-bitcoin">Buy Bitcoin</nuxt-link>-->
<!--                </li>-->
<!--                <li>-->
<!--                  <nuxt-link-->
<!--                      class="header__link"-->
<!--                      :class="$route.name === 'news' ? 'header__link_active' : ''"-->
<!--                      to="/news">News</nuxt-link>-->
<!--                </li>-->
<!--              </ul>-->
<!--            </nav>-->
<!--          </div>-->
        </div>
      </div>
      <div class="template__content">
        <nuxt />
      </div>
      <div class="template__footer footer">
        <div class="footer__container">
          <div class="footer__top">
            <nuxt-link
                class="header__title"
                to="/">
              <img src="~assets/img/icon/logo.png" alt="logo"/>
            </nuxt-link>
            <div class="footer__links">
              <nuxt-link
                  class="footer__link"
                  :class="$route.name === 'index' ? 'footer__link_active' : ''"
                  to="/">About us</nuxt-link>
              <nuxt-link
                  class="footer__link"
                  :class="$route.name === 'buy-bitcoin' ? 'footer__link_active' : ''"
                  to="/buy-bitcoin">Buy BTC</nuxt-link>
              <nuxt-link
                  class="footer__link"
                  :class="$route.name === 'news' ? 'footer__link_active' : ''"
                  to="/news">News</nuxt-link>
            </div>
            <div class="buttons__block">
              <a target="_blank" href="https://twitter.com/microstrategy"><img src="~assets/img/icon/TwitterRed.svg"/></a>
              <a target="_blank" href="https://youtube.com/@microstrategy"><img src="~assets/img/icon/YoutubeRed.svg"/></a>
              <a target="_blank" href="https://www.tradingview.com/symbols/NASDAQ-MSTR/"><img src="~assets/img/icon/TrandingViewRed.svg"/></a>
            </div>
          </div>
          <div class="footer__bottom">
            <span class="footer__big-desc">© 2023 COPYRIGHT MICROSTRATEGY INCORPORATED. ALL RIGHTS RESERVED.</span>
            <div class="footer__privacy-block">
              <span class="footer__privacy">Privacy policy</span>
              <span class="footer__privacy">Legal</span>
              <span class="footer__privacy">Terms of use</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
};
</script>
<style lang="scss" scoped>
.primary {
  height: 100vh;
  overflow-y: auto;

  font-family: Inter, sans-serif;
  font-style: normal;
  &__template {
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }
}

.template {
  height: 100%;
  min-height: 100vh;
  overflow: auto;
  &__header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;
    gap: 8px;

    background: #FFF;
    box-shadow: 0px 2px 2px 0px rgba(72, 88, 96, 0.10);
  }
  &__content {
    display: flex;
    align-items: center;
    flex-direction: column;

  }
  &__menu {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px;
    margin-top: 4px;
    gap: 24px;

    height: 56px;
    width: 100%;

    background: #FFFFFF;
  }
  &__footer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
}

.header {
  &__logo {
    cursor: pointer;
  }
  &__links {
    display: flex;
    align-items: baseline;
    gap: 32px;
  }
  &__link {
    color: var(--typo-primary, #171A1C);
    font-size: 16px;
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: 550;
    line-height: 24px;
    &_active {
      border-bottom: 2px solid #D9232E;
    }
  }
  &__link:hover {
    text-decoration: none;
  }
  &__container {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    max-width: 1200px;
    width: 100%;
  }
  &__title {
    font-weight: 700;
    font-size: 22px;
    line-height: 26px;
    text-decoration: none;

    color: #0080D3;
  }
}

.footer {
  &__container {
    display: flex;
    flex-direction: column;
    gap: 54px;
    justify-content: space-between;
    align-items: baseline;
    height: 161px;
    max-width: 1200px;
    width: 100%;
    padding: 36px 48px 25px 48px;
    border-radius: 32px 32px 0px 0px;
    background: var(--bg-secondary, #F3F5F6);
  }
  &__top {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    width: 100%;
  }
  &__bottom {
    display: flex;
    justify-content: space-between;
    width: 100%;
    align-items: baseline;
  }
  &__big-desc {
    color: var(--typo-ghost, rgba(138, 153, 168, 0.70));
    font-size: 12px;
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
  }
  &__privacy-block {
    display: flex;
    gap: 32px;
  }
  &__privacy {
    color: var(--typo-ghost, rgba(138, 153, 168, 0.70));
    /* Caption/Caption Big Regular */
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
  &__links {
    display: flex;
    align-items: baseline;
    gap: 48px;
  }
  &__link {
    color: var(--typo-secondary, #6C8093);
    /* Text/Small Text Regular */
    font-size: 16px;
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
  }
  &__text-block {
    display: flex;
    flex-direction: column;

    font-weight: 400;
    font-size: 12px;
    line-height: 14px;

    color: #F6F6F6;
  }
}
.button {
  display: inline-flex;
  padding: 8px 16px;
  background: #F3F5F6;;
  &_connect {
    border-radius: 8px;
    border: 2px solid var(--control-secondary-border-default, #D9232E);

    color: var(--control-secondary-typo, #D9232E);
    /* Button/Small Button Text */
    font-size: 16px;
    font-family: Inter, sans-serif;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }
}
.buttons {
  &__block {
    display: flex;
    gap: 16px;
  }
}

.container{
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 10px;
  position: relative;
}
.content-wrapper{
  width: 100%;
}
.header__nav {
  position: absolute;
  right: 36px;
  display: block;
}
.header__menu {
  display: flex;
  position: relative;
  z-index: 2;
}
.header__menu li {
  list-style: none;
  margin: 0px 0px 0px 36px;
  font-size: 16px;
  text-transform: uppercase;
  text-decoration: none;
}
.content-wrapper{
  margin-top: 78px;
  padding: 10px;
  line-height: 34px;
}
@include _575 {
  .button_connect {
    display: none;
  }
  .footer {
    &__container {
      height: auto;
    }
    &__top {
      flex-direction: column;
      align-items: center;
      gap: 8px;
    }
  }
}
@include _480 {
  .button_connect {
    display: block;
  }
  .header {
    &__container {
      flex-direction: column;
      align-items: center;
      gap: 16px;
    }
  }
  .footer {
    &__bottom {
      flex-direction: column;
      gap: 8px;
    }
  }
}
</style>
