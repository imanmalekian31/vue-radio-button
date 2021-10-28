<template>
  <div class="v-radio-container">
    <template v-for="(option, idx) in options">
      <input
        :key="`input-${idx}`"
        :id="`input-${idx}`"
        type="radio"
        name="iman"
        :value="option.id"
        :checked="isActive(option.id)"
        @input="updateActivePlan"
      />
      <label
        :key="`label-${idx}`"
        :for="`input-${idx}`"
        :class="{
          'v-radio-label': true,
          'v-radio-active': isActive(option.id),
        }"
      >
        <slot name="label" :props="option">
          {{ option.title }}
        </slot>
      </label>
    </template>
  </div>
</template>

<script>
export default {
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
    name: {
      default : 'vue-radio-button',
      type:[String , Number]
    }
  },
  methods: {
    updateActivePlan(e) {
      this.$emit("update", e.target.value);
    },
    isActive(id){
      return this.value == id
    }
  },
};
</script>

<style scoped>
.v-radio-container input {
  display: none;
}

.v-radio-label {
  cursor: pointer;
}
</style>
