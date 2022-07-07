import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD31JAHhfQCLgEiDcnDByO6zhPdhCvE5V8",
  authDomain: "depressiveepisode.firebaseapp.com",
  projectId: "depressiveepisode",
  storageBucket: "depressiveepisode.appspot.com",
  messagingSenderId: "502113956045",
  appId: "1:502113956045:web:b127ac36455786b0247984",
  measurementId: "G-9VFEBFV0RJ",
};

initializeApp(firebaseConfig);

import "@shoelace-style/shoelace";
import "@shoelace-style/shoelace/dist/themes/light.css";
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path";

setBasePath(
  "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0-beta.73/dist/"
);

import toastification from "vue-toastification";
import "vue-toastification/dist/index.css";

const options = {
  timeout: false,
  maxToasts: 5,
  icon: false,
};

createApp(App)
  .use(store)
  .use(router)
  .use(toastification, options)
  .mount("#app");
