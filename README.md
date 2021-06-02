# vue-radio-button

# Table of Contents

- [**Demo**](#demo)
- [**Installation**](#installation)
- [**Usage**](#usage)
- [**Constructor Options**](#constructor-options)
- [**Examples**](#examples)
- [**License**](#license)

# Demo

[**Demo**](https://vue-radio-button.herokuapp.com/)

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
    <template #default="{ props }">
      <div class="vue-radio-button">
        <img width="40" height="40" :src="props.icon" class="icon" />
        <div class="title">{{ props.title }}</div>
      </div>
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
          title: "ٰVite",
        },
      ],
    }),
  };
</script>

<style>
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
    position: absolute;
    top: 15px;
  }

  .title {
    position: absolute;
    bottom: 20px;
  }
</style>
```

## Constructor Options

| Key        | Type           | Description                | Default     |
| :--------- | -------------- | -------------------------- | ----------- |
| `value`    | Object         | selected button            | `null`      |
| `options`  | Array          | list of buttons            | `required`  |
| `color`    | String         | color of the active button | `#9e9e9e30` |
| `noRipple` | Boolean        | ripple style               | `true`      |
| `width`    | String, Number | width of buttons           | `100px`     |
| `height`   | String, Number | height of buttons          | `100px`     |

# Examples

## Custom active color

```html
<template>
  <VueRadioButton v-model="selectedButton" :options="buttons" color="#f8a1155e">
    <template #default="{ props }">
      <div class="vue-radio-button">
        <img width="40" height="40" :src="props.icon" class="icon" />
        <div class="title">{{ props.title }}</div>
      </div>
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
          title: "ٰVite",
        },
      ],
    }),
  };
</script>

<style>
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
    position: absolute;
    top: 15px;
  }

  .title {
    position: absolute;
    bottom: 20px;
  }
</style>
```

## Without ripple

```html
<template>
  <VueRadioButton
    v-model="selectedButton"
    :options="buttons"
    color="#747bff"
    no-ripple
  >
    <template #default="{ props }">
      <div class="vue-radio-button">
        <img width="50" height="50" :src="props.icon" class="icon" />
      </div>
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
          title: "ٰVite",
        },
      ],
    }),
  };
</script>

<style>
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
```

## Custom dimension

```html
<template>
  <VueRadioButton
    v-model="selectedButton"
    :options="buttons"
    color="#f8a1155e"
    width="150"
    height="80"
  >
    <template #default="{ props }">
      <div class="vue-radio-button">
        <img width="40" height="40" :src="props.icon" class="icon" />
        <div class="title">{{ props.title }}</div>
      </div>
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
          title: "ٰVite",
        },
      ],
    }),
  };
</script>

<style>
  .vue-radio-button {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
  }

  .icon {
    object-fit: contain;
  }
</style>
```

# License

[The MIT License](http://opensource.org/licenses/MIT)
