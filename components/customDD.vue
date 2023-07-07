<template>
  <div class="calc-select" :tabindex="tabindex" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="open = !open">
      <img style="width: 32px; height: 32px;" :src="selected.icon" :alt="selected.name"/>
      <span>{{selected.name}}</span>
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div
          v-for="(option, i) of options"
          class="item"
          :key="i"
          @click="
          selected = option;
          open = false;
          $emit('input', option);
        "
      >
        <div class="item__short-data">
          <img style="width: 32px; height: 32px;" :src="option.icon" :alt="option.name"/>
          <span>{{option.name}}</span>
        </div>
        <span class="item__full-name">{{ option.fullname }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: Object,
      required: false,
      default: null,
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  data() {
    return {
      selected: this.default
          ? this.default
          : this.options.length > 0
              ? this.options[0]
              : null,
      open: false,
    };
  },
  mounted() {
    this.$emit("input", this.selected);
  },
};
</script>

<style scoped>
.calc-select {
  position: relative;
  width: 100%;
  text-align: left;
  outline: none;
  line-height: 47px;
}

.calc-select .selected {
  display: flex;
  align-items: center;
  gap: 12px;

  border-radius: 12px;
  border: 2px solid rgba(108, 128, 147, 0.25);
  color: #171A1C;
  padding: 12px 24px;

  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  cursor: pointer;
  user-select: none;
}

.calc-select .selected.open {
  border-radius: 12px;
  border: 2px solid rgba(108, 128, 147, 0.25);
}

.calc-select .selected:after {
  position: absolute;
  content: "";
  top: 22px;
  right: 1em;
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: #fff transparent transparent transparent;
}

.calc-select .items {
  color: #fff;
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  border-bottom: 2px solid rgba(108, 128, 147, 0.25);
  border-left: 2px solid rgba(108, 128, 147, 0.25);
  border-right: 2px solid rgba(108, 128, 147, 0.25);
  position: absolute;
  background: #FFF;
  left: 0;
  right: 0;
  z-index: 1;
}

.item {
  color: #171A1C;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;

  padding: 16px 24px;
  cursor: pointer;
  user-select: none;
}
.item__short-data {
  display: flex;
  align-items: center;
  gap: 8px;
}
.item__full-name {
  color: #6C8093;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
}

.calc-select .items div:hover {
  background: #F6F7F8;
}

.selectHide {
  display: none;
}
</style>
