# vue-radio-button

# Table of Contents

- [**_Demo_**](#demo)
- [**_Installation_**](#installation)
- [**_Usage_**](#usage)
- [**_Constructor Options_**](#constructor-options)
- [**_Examples_**](#examples)
- [**_License_**](#license)

# Demo

[**_Demo_**](http://hilongjw.github.io/vue-progressbar/index.html)

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

main.js

```html
<template>
  <VueRadioButton v-model="selectedButton" :options="buttons">
    <template #default="{ props }">
      <div class="vueRadioButtonOne">
        <img width="40" height="40" :src="props.icon" class="icon" />
        <div class="title">
          {{ props.title }}
        </div>
      </div>
    </template>
  </VueRadioButton>
</template>

<style>
  .vueRadioButtonOne {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .vueRadioButtonOne .icon {
    object-fit: contain;
    position: absolute;
    top: 15px;
  }

  .vueRadioButtonOne .title {
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
      <div class="vueRadioButton">
        <img width="40" height="40" :src="props.icon" class="icon" />
        <div class="title">
          {{ props.title }}
        </div>
      </div>
    </template>
  </VueRadioButton>
</template>

<style>
  .vueRadioButton {
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
      <div class="vueRadioButton">
        <img width="50" height="50" :src="props.icon" class="icon" />
      </div>
    </template>
  </VueRadioButton>
</template>

<style>
  .vueRadioButton {
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
      <div class="vueRadioButton">
        <img width="40" height="40" :src="props.icon" class="icon" />
        <div class="title">
          {{ props.title }}
        </div>
      </div>
    </template>
  </VueRadioButton>
</template>

<style>
  .vueRadioButton {
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
