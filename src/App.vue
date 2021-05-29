<template>
  <div id="app">
    <h1>Vue Radio Button</h1>

    <ExampleOne />
    <ExampleTwo />
    <ExampleThree />
    <ExampleFour />

    <VueRadioButton
      v-model="selectedButton"
      :options="buttons"
      color="#d3edfe"
      width="150"
      height="80"
    >
      <template #default="{ props }">
        <div class="vueRadioButtonFour">
          <img width="40" height="40" :src="props.icon" class="icon" />
          <div class="title">
            {{ props.title }}
          </div>
        </div>
      </template>
    </VueRadioButton>
  </div>
</template>

<script>
import VueRadioButton from "./components/VueRadioButton";
import { ExampleOne, ExampleTwo, ExampleThree, ExampleFour } from "./examples";

export default {
  name: "App",
  components: {
    ExampleOne,
    ExampleTwo,
    ExampleThree,
    ExampleFour,
    VueRadioButton,
  },
  data: () => ({
    selectedButton: "",
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
.v-radio-button {
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  border: none;
}
</style>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Arial;
}
</style>

<style scoped>
/* example four  */
.vueRadioButtonFour {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.vueRadioButtonFour .icon {
  object-fit: contain;
}
</style>
