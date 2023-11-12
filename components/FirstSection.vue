<template id="Home">
  <div
    class="First-Section w-full bg-[#101010] h-screen font-bold text-white flex items-center justify-center"
  >
    <Slider />
    <div
      class="w-auto z-10 h-full absolute top-0 flex flex-col items-center justify-center whitespace-nowrap font-normal tracking-wide"
    >
      <p class="text-blue-400 sm:text-xs md:text-sm lg:text-xl">
        {{ $t("Hello") }}, {{ $t("Name") }}
      </p>
      <p class="text-4xl sm:text-6xl lg:text-7xl font-[200] my-4">
        {{ $t("Hassan") }}
        <span class="text-blue-400">{{ $t("Adel") }}</span>
      </p>
      <p class="sm:text-xs md:text-sm lg:text-base mt-2">
        <span class="text-blue-400">{{ $t("Web") }}</span>
        {{ $t("Developer") }} &
        <span class="text-blue-400">{{ $t("Graphic") }} </span
        >{{ $t("Designer") }}
      </p>
      <a
        href="https://docs.google.com/document/d/1izUe5g2dzgfdR9Lc1A3zeTBvDiTG0aCh/edit?usp=sharing&ouid=100565372178365443789&rtpof=true&sd=true"
        class="bg-blue-400 hover:bg-blue-700 mt-5 duration-1500 text-white py-2 px-4 rounded duration-1000"
        target="_blank"
      >
        {{ $t("DownloadResume") }}
      </a>
    </div>
  </div>
</template>

<script>
import Slider from "./Global/Slider.vue";
export default {
  name: "FirstSection",
  components: { Slider },
};
</script>

<style lang="scss"></style>
