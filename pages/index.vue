<template>
  <div class="content">
    <div class="content__block content__block_first">
      <div class="content__banner">
test
      </div>
      <div class="content__crypto-line">
        test
      </div>
    </div>
    <div class="content__block">
      test
    </div>
    <div class="content__block">
test
    </div>
    <div class="content__block">
test
    </div>
    <div class="content__block">
test
    </div>
<!--    <div class="content__block content__block_descriptions">-->
<!--      <div-->
<!--        v-for="(descriptionData, key) in descriptions"-->
<!--        :key="key"-->
<!--        class="content__descriptions">-->
<!--        <img :src="descriptionData.src" :alt="descriptionData.name"/>-->
<!--        <span class="content__text content__text_description content__text_small">{{ descriptionData.description }}</span>-->
<!--      </div>-->
<!--    </div>-->
  </div>
</template>
<script>

export default {
  name: 'Main',
  data() {
    return {
      // descriptions: [
      //   {
      //     src: require('~/assets/img/ui/profileActive.svg'),
      //     name: 'profile',
      //     description: this.$t('index.profileDesc')
      //   },
      //   {
      //     src: require('~/assets/img/ui/linkActive.svg'),
      //     name: 'link',
      //     description: this.$t('index.linkDesc')
      //   },
      //   {
      //     src: require('~/assets/img/ui/groupActive.svg'),
      //     name: 'group',
      //     description: this.$t('index.groupDesc')
      //   },
      //   {
      //     src: require('~/assets/img/ui/designActive.svg'),
      //     name: 'design',
      //     description: this.$t('index.designDesc')
      //   },
      //   {
      //     src: require('~/assets/img/ui/previewActive.svg'),
      //     name: 'share',
      //     description: this.$t('index.shareDesc')
      //   }
      // ]
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
  gap: 16px;
  padding-top: 32px;
  padding-bottom: 144px;
  &__block {
    display: flex;
    width: 100%;
    gap: 16px;
    &_first {
      flex-direction: column;
    }
  }
  &__banner {
    width: 100%;
    height: 500px;

    border-radius: 40px;
    background: var(--bg-secondary, #F3F5F6);
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
}
</style>
