<template>
  <div class="experience q-my-xl">
    <Header name="Experience" class="q-mb-xl" />
    <h5 class="text-h5 text-weight-medium">Studies</h5>
    <div class="row q-px-lg q-my-xl " v-for="item in studies" :key="item.id">
      <div class="col-xs-12 col-sm-4 column">
        <p class="text-weight-bold">{{ item.school }}</p>
        <p class="text-weight-light">
          {{ item.startDate }} - {{ item.endDate }}
        </p>
      </div>
      <div class="col-xs-12 col-sm-8">
        <p class="text-weight-medium">{{ item.position }}</p>
        <p class="text-weight-light desktop-only">
          {{ item.description }}
        </p>
      </div>
      <q-separator color="primary" inset />
    </div>
    <h5 class="text-h5 text-weight-medium">Career</h5>
    <div class="row q-px-lg q-my-xl" v-for="item in careers" :key="item.id">
      <div class="col-xs-12 col-sm-4 column">
        <p class="text-weight-bold">{{ item.school }}</p>
        <p class="text-weight-light">
          {{ item.startDate }} - {{ item.endDate }}
        </p>
      </div>
      <div class="col-xs-12 col-sm-8">
        <p class="text-weight-medium">{{ item.position }}</p>
        <p class="text-weight-light desktop-only">
          {{ item.description }}
        </p>
      </div>
      <q-separator style="height: 1px;" color="primary" inset />
    </div>
  </div>
</template>

<script>
export default {
  name: "experience",
  components: {
    Header: () => import("./header")
  },
  computed: {
    studies() {
      return this.$store.getters["details/getStudies"];
    },
    careers() {
      return this.$store.getters["details/getCareers"];
    }
  }
};
</script>
