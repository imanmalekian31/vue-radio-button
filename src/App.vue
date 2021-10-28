<template>
  <div id="app">
    <h1>Vue Radio Button</h1>
    <a
      href="https://github.com/imanmalekian31/vue-radio-button"
      target="_blank"
    >
      <img width="40" height="40" :src="require('./assets/github-logo.png')" />
    </a>

    {{ selectedButton }}

    <VueRadioButton v-model="selectedButton" :options="buttons">
      <template #label="{props}">
        <img :src="props.icon" width="50" height="50" />
        <span>{{props.title}}</span>
      </template>
    </VueRadioButton>
  </div>
</template>

<script>
import VueRadioButton from "./components/VueRadioButton";

export default {
  name: "App",
  components: {
    VueRadioButton,
  },
  data: () => ({
    selectedButton: 1,
    buttons: [
      {
        id: 1,
        icon: require("./assets/logo.png"),
        title: "Vue",
      },
      {
        id: 2,
        icon: require("./assets/nuxt.svg"),
        title: "Nuxt",
      },
      {
        id: 3,
        icon: require("./assets/vite.svg"),
        title: "Vite",
      },
      {
        id: 4,
        icon: require("./assets/bootstrap-vue.svg"),
        title: "Bootstrap",
      },
      {
        id: 5,
        icon: require("./assets/vuetify.svg"),
        title: "Vuetify",
      },
    ],
  }),
};
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  -webkit-font-smoothing: antialiased;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
}

.v-radio-label {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  margin: 5px;
  border-radius: 4px;
  border: 1px solid #eee;
  transition: all 500ms;
}

.v-radio-active {
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);
}
</style>
