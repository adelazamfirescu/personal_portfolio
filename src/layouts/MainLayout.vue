<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container :class="paddingLarge">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
const menuLinks = [
  {
    title: "Home",
    to: "home"
  }
];

export default {
  name: "MainLayout",
  data() {
    return {
      paddingLarge: "",
      menuOpen: false,
      essentialLinks: menuLinks
    };
  },

  mounted() {
    if (this.$q.platform.is.mobile) {
      this.paddingLarge = "";
    } else {
      this.paddingLarge = "padding-lg";
    }
  }
};
</script>

<style lang="scss" scoped>
.q-layout {
  overflow-x: hidden;

  .padding-lg {
    padding: 0 4%;
  }
}
</style>
