<template>
  <div class="absolute z-50 w-screen flex flex-col h-screen">
    <div
      class="flex-grow flex flex-col justify-center items-center bg-[#101010]"
    >
      <div class="flex flex-col justify-center items-center">
        <img
          src="../../public/assets/images/15.png"
          class="w-3/4 md:w-1/4 preloaderImg"
          alt=""
        />
        <div class="relative flex items-center justify-center preloader">
          <h1 class="mr-3 text-5xl font-[200] text-white">loading</h1>
          <div
            class="w-10 h-10 border-4 border-gray-200 rounded-full animate-spin"
          >
            <div class="absolute border-4 border-blue-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    const gsap = this.$gsap;
    this.boxRotation();
    gsap.to(".preloader", {
      opacity: 0,
      duration: 0,
    });
    setTimeout(
      function () {
        gsap.fromTo(
          ".preloaderImg",
          { y: -400, duration: 2, ease: "bounce.out" },
          { y: +0, duration: 2, ease: "bounce.out" }
        );
      }.bind(this),
      50
    );
    setTimeout(
      function () {
        gsap.to(".preloader", {
          opacity: 1,
          duration: 2,
          ease: "bounce.out",
        });
      }.bind(this),
      1500
    );
  },

  methods: {
    boxRotation() {
      const gsap = this.$gsap;
      setTimeout(
        function () {
          gsap.to(".preloaderImg", {
            duration: 0.5,
            opacity: 0,
            x: -100,
            stagger: 0.1,
            ease: "back.in",
          });
          gsap.to(".preloader", {
            duration: 0.5,
            opacity: 0,
            x: +100,
            stagger: 0.1,
            ease: "back.in",
          });
        }.bind(this),
        3200
      );
    },
  },
};
</script>

<style></style>
