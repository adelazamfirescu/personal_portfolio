<template>
  <div id="q-app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  preFetch({ store, ssrContext }) {
    return store.dispatch("details/loadProjects");
  }
};
</script>
