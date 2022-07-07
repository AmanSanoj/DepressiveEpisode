<template><AboutHomePageVue /></template>

<script>
import useStore from "vuex";
import AboutHomePageVue from "@/components/About-HomePage.vue";

export default {
  setup() {
    const store = useStore();

    console.log(store.state.user);
    store.commit("setUser", "Aman");
  },
  components: {
    AboutHomePageVue,
  },
};
</script>
