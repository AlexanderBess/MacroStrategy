<template>
  <a
    :href="card.link"
    target="_blank"
    :class="`news-card news-card__${mode}`">
    <img class="news-card__img" :src="card.img" :alt="card.title"/>
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
  max-width: 378px;
  gap: 16px;
  text-decoration: none;
  &__small {
    max-width: 100%;
    flex-direction: row;
  }
  &__big {
    max-width: 100%;
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
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
    &_big {
      font-size: 32px;
      line-height: 40px;
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
  &__img {
    height: max-content;
  }
}
</style>
