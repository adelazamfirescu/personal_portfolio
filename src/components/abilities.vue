<template>
  <div class="abilities q-my-xl">
    <Header name="Abilities" class="q-mb-xl" />
    <h5 class="text-h5 text-weight-medium">Skills</h5>

    <div class="row justify-center items-center q-px-lg">
      <div
        v-for="item in skills"
        :key="item.id"
        class="ability row items-center row col-sm-6 col-md-6 col-6 col-xs-12 q-my-sm"
      >
        <p class="text-subtitle1 col-5 q-mb-none">{{ item.name }}</p>
        <q-rating
          color="thirdly"
          class="col-7"
          readonly
          :color-selected="ratingColors"
          v-model="item.level"
          size="1.5em"
          icon="stop"
        />
      </div>
    </div>
    <h5 class="text-h5 text-weight-medium">Tools</h5>
    <div class="row justify-center items-center q-px-lg">
      <div
        v-for="item in tools"
        :key="item.id"
        class="ability row items-center row col-sm-6 col-md-6 col-6 col-xs-12 q-my-sm"
      >
        <p class="text-subtitle1 col-5 q-mb-none">{{ item.name }}</p>
        <q-rating
          class="col-7"
          readonly
          :color="ratingColors"
          v-model="item.level"
          size="1.5em"
          icon="stop"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "abilities",
  components: {
    Header: () => import("./header")
  },
  data() {
    return {
      ratingColors: [
        "secondary",
        "secondary-2",
        "secondary-3",
        "secondary-4",
        "secondary-5"
      ],
      ratingModel: 3
    };
  },
  computed: {
    skills() {
      const skills = this.$store.getters["details/getSkills"];
      return [...skills].sort((a, b) => b.level - a.level);
    },

    tools() {
      const tools = this.$store.getters["details/getTools"];
      return [...tools].sort((a, b) => b.level - a.level);
    }
  }
};
</script>

<style lang="scss" scoped>
.abilities {
  .ability {
    .q-rating {
      color: $secondary;
    }
  }
}
</style>
