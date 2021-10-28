# vue-radio-button

<p align="center">
<img align="center"  src="https://user-images.githubusercontent.com/58827166/139230365-0b47633d-7465-41db-bb0a-4c6840f52a96.png"/>
</p>

# Table of Contents

- [**Demo**](#demo)
- [**Installation**](#installation)
- [**Usage**](#usage)
- [**Constructor Options**](#constructor-options)
- [**License**](#license)

# Demo

[**Demo**](https://vue-radio-button.netlify.app/)

# Installation

```shell
# npm
$ npm install vue-radio-button

#yarn
$ yarn add vue-radio-button
```

```js
import Vue from "vue";
import VueRadioButton from "vue-radio-button";

Vue.use(VueRadioButton);
```

# Usage

```html
<template>
  <VueRadioButton v-model="selectedButton" :options="buttons">
    <template #label="{ props }">
      <img :src="props.icon" width="50" height="50" />
      <span>{{ props.title }}</span>
    </template>
  </VueRadioButton>
</template>

<script>
  import VueRadioButton from "vue-radio-button";

  export default {
    components: { VueRadioButton },
    data: () => ({
      selectedButton: "",
      buttons: [
        {
          id: 1,
          icon: "https://vuejs.org/images/logo.svg",
          title: "Vue",
        },
        {
          id: 2,
          icon: "https://vitejs.dev/logo.svg",
          title: "Vite",
        },
      ],
    }),
  };
</script>

<style>
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
```

## Constructor Options

| Key       | Type            | Description            | Default                                            |
| :-------- | --------------- | ---------------------- | -------------------------------------------------- |
| `value`   | Object          | selected button        | `null`                                             |
| `options` | Array           | list of buttons        | `required`                                         |
| `name`    | String , Number | Group of radio buttons | `required if you have some group of radio buttons` |

For customizing you can use `label slot` and classes :

| Class name          | Description                   |
| :------------------ | ----------------------------- |
| `v-radio-container` | container of `VueRadioButton` |
| `v-radio-label`     | class of each label           |
| `v-radio-active`    | class of checked radio        |

# License

[The MIT License](http://opensource.org/licenses/MIT)
