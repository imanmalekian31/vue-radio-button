import VueRadioButton from "./components/VueRadioButton";

const VueRadioButtonInstall = {
  install(Vue) {
    Vue.component("vue-radio-button", VueRadioButton);
  },
};

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(VueRadioButtonInstall);
}

export default VueRadioButtonInstall;
