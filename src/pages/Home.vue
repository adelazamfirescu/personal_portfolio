<template>
  <div class="main q-pa-md q-pt-xl">
    <div class="carousel">
      <div class="carousel-ribbon"></div>

      <q-carousel
        animated
        v-model="slide"
        navigation
        infinite
        arrows
        swipeable
        draggable="false"
        transition-prev="slide-right"
        transition-next="slide-left"
        @mouseenter="autoplay = false"
        @mouseleave="autoplay = true"
      >
        <q-carousel-slide
          v-for="item in projects"
          :key="item.id"
          :name="'slide-' + item.id"
          :img-src="item.img"
        >
          <div class="overlay column items-center justify-center">
            <div class="content column justify-start items-center">
              <h4 class="text-h4 text-weight-medium">{{ item.name }}</h4>
              <div class="row justify-evenly" style="width: 100%">
                <q-btn
                  dense
                  flat
                  no-caps
                  v-if="item.link"
                  type="a"
                  aria-label="Access website"
                  :href="item.link"
                  target="_blank"
                  color="primary"
                  icon-right="link"
                  label="Site"
                />
                <q-btn
                  @click="
                    openAbout = true;
                    selectedProject = item;
                  "
                  flat
                  no-caps
                  aria-label="About the project"
                  color="primary"
                  label="About"
                />

                <q-btn
                  dense
                  flat
                  no-caps
                  type="a"
                  aria-label="View source code"
                  :href="item.gitLink"
                  target="_blank"
                  icon="code"
                  color="primary"
                  label="Code"
                />
              </div>
            </div>
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>

    <div class="about row q-my-xl">
      <div class="about-ribbon"></div>

      <div
        class="profile-left col-5  col-sm-5 col-xs-12 justify-end items-center row"
      >
        <div class="profile-img"></div>
      </div>
      <div class=" profile-right col-7  col-sm-7 col-xs-12 row ">
        <div class="title q-pl-xl q-pt-xl">
          <p class="text-overline">caramel? yes of course.</p>
          <h4 class="text-h4 text-weight-bold  text-barcelony">
            Hi, I'm Adela Zamfirescu.
          </h4>
          <p>Front End Dev, UI&UX Enthusiast</p>
        </div>
      </div>
    </div>

    <div class="description row q-my-xl">
      <div class="col-8 col-sm-8 q-pa-xl col-xs-12">
        <p class="text-overline text-right q-px-sm">23, Romania</p>
        <h6 class="text-h6 q-px-xl">
          I'm a Front End Dev who also has a little bit of knowledge of the
          backend part. After doing a number of projects, I got to work with
          multiple technologies and understood better the reasons behind
          choosing them in different situations.
        </h6>
        <p class="text-weight-light q-px-xl">
          I believe communication is very important, as the message doesn't come
          across the way we want it to, either from the sender or the receiver.
          Taking the time to understand the product and the context is also what
          helps build it better. I like working with a team, but don't mind
          working on my own and think problems through.
        </p>
      </div>
      <div class="col-4 justify-center column desktop-only"></div>
    </div>

    <Experience />
    <Abilities />
    <Contact />

    <q-dialog v-model="openAbout">
      <q-card class="my-card">
        <q-img
          style="max-height: 50vh"
          :src="selectedProject.img"
          :alt="selectedProject.alt"
        />
        <q-card-section>
          <p>{{ selectedProject.description }}</p>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {
    Experience: () => import("components/experience"),
    Abilities: () => import("components/abilities"),
    Contact: () => import("components/contact")
  },
  data() {
    return {
      slide: "slide-100",
      autoplay: false,
      selectedProject: {},
      openAbout: false
    };
  },
  computed: {
    projects() {
      return this.$store.getters["details/getProjects"];
    }
  }
};
</script>

<style lang="scss" scoped>
.main {
  .carousel {
    position: relative;

    .q-carousel__slide {
      padding: 0;
      .overlay {
        background-color: rgba(0, 0, 0, 0.75);
        z-index: 2;
        width: 100%;
        height: 100%;
        .content {
          color: #ffffff;
        }
      }
    }

    .carousel-ribbon {
      background-color: $secondary;
      transform: rotate(-9deg);
      z-index: -2;
      position: absolute;
      height: 240px;
      width: 140%;
      left: -20%;
      top: 19%;
    }
  }
  .about {
    width: 100%;
    height: 70vh;
    position: relative;
    .profile-img {
      background-image: url(../assets/profile_1.jpg);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      height: 61vh;
      width: 50vh;
    }
    .about-ribbon {
      background-color: $primary;
      z-index: -2;
      position: absolute;
      height: 100%;
      width: 78%;
      left: 22%;
    }
  }
  .description {
    height: auto;
    .col-8 {
      background-color: $secondary;
      padding: 7%;
      line-height: 2.5;
    }
  }
}
@media only screen and (max-width: 768px) {
  .main {
    .carousel {
      .text-h4 {
        margin-bottom: calc(1.33em * 2);
      }
    }
    .about {
      height: auto;
      .profile-img {
        height: 51vh;
        width: 40vh;
      }
      .profile-left {
        justify-content: center;
      }
      .profile-right {
        justify-content: center;

        .title {
          padding-left: 0;
          justify-content: center;
          text-align: center;
          .text-barcelony {
            line-height: 0.9;
          }
        }
      }
      .about-ribbon {
        left: 0;
        width: 100%;
        height: 80%;
        top: 20%;
      }
    }
    .description {
      .col-8 {
        padding: 0;
        line-height: 1.5;
      }
    }
  }
}
</style>
