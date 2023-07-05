<template>
  <a
    :href="card.link"
    target="_blank"
    :class="`news-card news-card__${mode}`">
    <img :src="card.img" :alt="card.title"/>
    <div class="news-card__data">
      <span class="news-card__author">{{ card.author }}</span>
      <span class="news-card__title" :class="`news-card__title_${mode}`">{{ card.title }}</span>
      <span class="news-card__date">{{ card.date }}</span>
    </div>
  </a>
</template>

<script>
export default {
  name: "newsCard",
  props: {
    card: {
      type: Object,
      required: true
    },
    mode: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.news-card {
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-decoration: none;
  &__small {
    flex-direction: row;
  }
  &__data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  &__author {
    color: var(--typo-secondary, #6C8093);

    /* Text/Small Text Medium */
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
  &__title {
    color: var(--typo-primary, #171A1C);
    /* Header/Header H3 */
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
    &_small {
      font-size: 24px;
      line-height: 32px;
    }
  }
  &__date {
    color: var(--typo-secondary, #6C8093);

    /* Text/Small Text Medium */
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
  }
}
</style>
