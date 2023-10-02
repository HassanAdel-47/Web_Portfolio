<template id="Home">
  <div
    class="First-Section w-full bg-white h-screen font-bold text-black flex items-center justify-center"
  >
    <p class="box">Hello There</p>
  </div>
</template>

<script>
import Slider from "./Global/Slider.vue";
export default {
  name: "FirstSection",
  components: { Slider },

  mounted() {
    this.boxRotation();
  },

  methods: {
    boxRotation() {
      const gsap = this.$gsap;
      // gsap.to(".box", {
      //   rotation: 360,
      //   duration: 0.5,
      //   repeat: 1,
      //   repeatDelay: 0,
      // });
      // gsap.to(".box", { rotation: 0, y: "50%", duration: 1 });
      gsap.to(".box", { rotation: 360, duration: 2, ease: "bounce.out" });
    },
  },
};
</script>

<style lang="scss"></style>
