<template>
  <VueRadioButton
    v-model="selectedButton"
    :options="buttons"
    width="50"
    height="50"
    color="#d3edfe"
  >
    <template #default="{ props }">
      <div class="vue-radio-button">
        <img width="35" height="35" :src="props.icon" class="icon" />
      </div>
    </template>
  </VueRadioButton>
</template>

<script>
import VueRadioButton from "../components/VueRadioButton";

export default {
  components: { VueRadioButton },
  data: () => ({
    selectedButton: "",
    buttons: [
      {
        id: 1,
        icon: require("../assets/logo.png"),
        title: "Vue",
      },
      {
        id: 2,
        icon: require("../assets/nuxt.svg"),
        title: "Nuxt",
      },
      {
        id: 3,
        icon: require("../assets/vite.svg"),
        title: "Vite",
      },
      {
        id: 4,
        icon: require("../assets/bootstrap-vue.svg"),
        title: "Bootstrap",
      },
      {
        id: 5,
        icon: require("../assets/vuetify.svg"),
        title: "Vuetify",
      },
    ],
  }),
};
</script>

<style scoped>
.vue-radio-button {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.icon {
  object-fit: contain;
}
</style>
