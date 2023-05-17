<template>
  <NuxtLink
    to="/"
    class="flex justify-center back-to-top-button fixed bottom-5 right-5 bg-white hover:bg-blue-400 hover:text-[#101010] text-blue-400 w-12 h-12 z-50 border-0 cursor-pointer p-3 rounded-full duration-1000"
  >
    <button @click="scrollToTop" class="w-full h-full text-center">
      <font-awesome-icon :icon="['fas', 'arrow-up']" />
    </button>
  </NuxtLink>
</template>

<script>
export default {
  data() {
    return {
      lang: "en",
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style>
.back-to-top-button.show {
  display: block;
}
</style>
