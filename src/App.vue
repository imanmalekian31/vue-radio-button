<template>
  <div id="app">
    <h1>Vue Radio Button</h1>
    <a href="https://github.com/imanmalekian31/vue-radio-button" target="blank">
      <img width="40" height="40" :src="require('./assets/github-logo.png')" />
    </a>

    <h4 class="title-example">Default</h4>
    <ExampleOne />
    <h4 class="title-example">Custom color</h4>
    <ExampleTwo />
    <h4 class="title-example">Without ripple</h4>
    <ExampleThree />
    <h4 class="title-example">Custom width & height</h4>
    <ExampleFour />

    <h4 class="title-example">Another examples</h4>

    <ExampleFive />
    <br />
    <ExampleSix />
  </div>
</template>

<script>
import {
  ExampleOne,
  ExampleTwo,
  ExampleThree,
  ExampleFour,
  ExampleFive,
  ExampleSix,
} from "./examples";

export default {
  name: "App",
  components: {
    ExampleOne,
    ExampleTwo,
    ExampleThree,
    ExampleFour,
    ExampleFive,
    ExampleSix,
  },
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: Arial;
  padding: 5px;
}
</style>

<style scoped>
.title-example {
  border-bottom: 1px solid #606f7b;
  padding: 5px 20px;
  color: #606f7b;
}
</style>
