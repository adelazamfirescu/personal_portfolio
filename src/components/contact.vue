<template>
  <div class="column justify-center q-my-xl">
    <p class="text-center">You can find me on</p>
    <div class="row justify-center">
      <q-btn
        class="q-mx-md"
        flat
        type="a"
        aria-label="social handle"
        href="https://www.linkedin.com/in/adela-maria-zamfirescu-a813371b1/"
        target="_blank"
        color="primary"
      >
        <img
          style="width: 30px; height: 30px;"
          alt="linkedin icon"
          src="../assets/icons/linkedin.png"
      /></q-btn>
      <q-btn
        class="q-mx-md"
        flat
        type="a"
        aria-label="social handle"
        href="https://gitlab.com/zamfirescu_adela"
        target="_blank"
        color="primary"
      >
        <img
          style="width: 30px; height: 30px;"
          alt="gitlab icon"
          src="../assets/icons/gitlab.png"
      /></q-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact",
  computed: {
    socialHandles() {
      return this.$store.getters["details/getSocialHandles"];
    }
  }
};
</script>

<style lang="scss" scoped></style>
