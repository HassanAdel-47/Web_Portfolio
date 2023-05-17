<template>
  <div class="Slider">
    <b-carousel
      class="absolute right-0 top-0 w-screen"
      id="carousel-1"
      :interval="3000"
      controls
      fade
    >
      <b-carousel-slide>
        <template #img>
          <div
            class="bg-black w-screen h-screen absolute top-0 right-0 opacity-75"
          ></div>
          <img
            class="w-screen h-screen"
            src="../../public/assets/images/mobile1.jpg"
            srcset="
              ../../public/assets/images/mobile1.jpg  920w,
              ../../public/assets/images/4.jpg       1200w
            "
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <div
            class="bg-black w-screen h-screen absolute top-0 right-0 opacity-60"
          ></div>
          <img
            class="w-screen h-screen"
            src="../../public/assets/images/mobile.jpg"
            srcset="
              ../../public/assets/images/mobile.jpg  920w,
              ../../public/assets/images/5.jpg      1200w
            "
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template #img>
          <img
            class="w-screen h-screen"
            src="../../public/assets/images/mobile1.jpg"
            srcset="
              ../../public/assets/images/mobile1.jpg  920w,
              ../../public/assets/images/6.jpg       1200w
            "
            alt="image slot"
          />
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>
<script>
import {
  BootstrapVue,
  BCarousel,
  BCarouselSlide,
  IconsPlugin,
} from "bootstrap-vue";
import Vue from "vue";
Vue.use(IconsPlugin);
Vue.use(BootstrapVue);

export default {
  name: "MyComponent",
  components: {
    BCarousel,
    BCarouselSlide,
  },
};
</script>

<style scoped></style>
