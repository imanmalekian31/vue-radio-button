<template>
  <div :style="cssVariables">
    <div
      v-for="(option, idx) in options"
      :key="idx"
      :class="{
        'v-radio-button': true,
        'v-radio-button-active': option.id === value.id,
      }"
      v-bind="$attrs"
      v-on="$listeners"
      @click="updateValue($event, option)"
    >
      <slot :props="option" />
    </div>
  </div>
</template>

<script>
import ripple from "../mixins/ripple";

export default {
  mixins: [ripple],
  model: {
    prop: "value",
    event: "update",
  },
  props: {
    value: {
      default: null,
    },
    options: {
      type: Array,
      required: true,
    },
    width: {
      type: [String, Number],
      default: 100,
    },
    height: {
      type: [String, Number],
      default: 100,
    },
    color: {
      type: String,
      default: "#9e9e9e30",
    },
    noRipple: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    cssVariables() {
      return {
        "--width": this.width + "px",
        "--height": this.height + "px",
        "--active-color": this.color,
      };
    },
  },
  methods: {
    updateValue(event, option) {
      if (!this.noRipple) {
        this.createRipple(event);
      }
      this.$emit("update", option);
    },
  },
};
</script>

<style>
.v-radio-button {
  width: var(--width);
  height: var(--height);
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #a7bbc7;
  color: #606f7b;
  display: inline-block;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  font-family: Arial;
  margin-right: 10px;
}

.v-radio-button .content {
  width: 100%;
  height: 100%;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.v-radio-button-active {
  background-color: var(--active-color);
}
</style>
<style>
span.ripple {
  position: absolute;
  border-radius: 50%;
  transform: scale(0);
  animation: ripple 400ms linear;
  background-color: rgba(255, 255, 255, 0.7);
}

@keyframes ripple {
  to {
    transform: scale(4);
    opacity: 0;
  }
}
</style>
