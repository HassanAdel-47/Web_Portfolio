<template>
  <header>
    <nav class="absolute w-full z-20">
      <!-- Show Loader when switch language -->
      <Loader v-if="loading" />
      <!-- Show logo when scrollig -->
      <NuxtLink v-if="showLogo" to="/">
        <button @click="scrollToTop">
          <img
            class="w-16 md:w-24 fixed top-5 left-5"
            src="../../public/assets/images/15.png"
            alt=""
          />
        </button>
      </NuxtLink>
      <!-- start navbar -->
      <div class="flex px-4 sm:px-6 lg:px-8">
        <div class="w-full flex items-center justify-between text-center h-28">
          <div class="flex items-center">
            <!-- Logo Image -->
            <NuxtLink to="/" class="text-white font-bold text-xl">
              <img
                class="w-16 md:w-24"
                src="../../public/assets/images/15.png"
                alt=""
              />
            </NuxtLink>
          </div>
          <div class="block lg:hidden">
            <!-- Mobile menu button -->
            <button
              @click="isOpen = !isOpen"
              class="text-[#fff] focus:outline-none"
            >
              <h1 class="text-[#fff] font text-4xl">&#9776;</h1>
            </button>
          </div>
          <div class="hidden lg:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <!-- Navigation Links -->
              <div v-for="(item, index) in menu" :key="index">
                <NuxtLink
                  :to="item.to"
                  class="block text-[#fff] hover:text-blue-400 mx-3 py-2 rounded-md text-xl font-normal uppercase duration-1000 after:block after:content-'' after:text-center after:scale-x-0 hover:after:scale-x-100 hover:after:border-b border-b-5 after:border-blue-400 after:transition after:duration-1000"
                >
                  {{ item.name }}
                </NuxtLink>
              </div>
              <!-- class="w-20 h-1 bg-blue-500 transform hover:scale-x-0 duration-500" -->
            </div>
          </div>

          <!-- change Language Button -->
          <NuxtLink to="/">
            <button
              @click="switchLanguage"
              class="text-white flex justify-center items-center"
            >
              <p>
                {{ this.lang }}
              </p>
              <img class="w-12 md:w-16" :src="getImagePath(flag)" alt="" />
            </button>
          </NuxtLink>
        </div>
      </div>

      <div
        :class="
          this.$i18n.locale === 'en'
            ? { 'left-0': isOpen, '-left-full': !isOpen }
            : { 'right-0': isOpen, '-right-full': !isOpen }
        "
        class="lg:hidden absolute top-0 -z-10 w-full transition-all ease-in-out duration-1000"
      >
        <!-- Mobile menu content -->
        <div
          class="bg-[#101010] absolute top-0 w-full h-screen px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center justify-evenly"
        >
          <div v-for="(item, index) in menu" :key="index" class="mt-3">
            <NuxtLink :to="item.to">
              <button
                @click="isOpen = !isOpen"
                class="text-white hover:text-blue-400 rounded-md text-xl font-normal uppercase duration-1000"
              >
                {{ item.name }}
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import Loader from "../Global/Loader.vue";
export default {
  components: { Loader },
  data() {
    return {
      showLogo: false,
      loading: false,
      isOpen: false,
      flag: "sy.png",
      lang: "AR",
    };
  },
  computed: {
    menu() {
      // Use computed property to dynamically update menu items with translated text
      return [
        { name: this.$t("Home"), to: `${this.$route.path}` },
        { name: this.$t("AboutMe"), to: `${this.$route.path}` + "#About" },
        { name: this.$t("Services"), to: `${this.$route.path}` + "#Services" },
        { name: this.$t("MySkills"), to: `${this.$route.path}` + "#Skills" },
        {
          name: this.$t("Portfolio"),
          to: `${this.$route.path}` + "#Portfolio",
        },
      ];
    },
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll); // Remove scroll event listener on component unmount
  },
  methods: {
    //switch between languages

    switchLanguage() {
      setTimeout(() => {
        this.loading = false;
      }, 1000);
      if (this.$i18n.locale === "en") {
        this.$i18n.locale = "ar";
        this.flag = "en.png";
        this.lang = "EN";
      } else {
        this.$i18n.locale = "en";
        this.flag = "sy.png";
        this.lang = "AR";
      }
      this.loading = true;
      this.$router.push("/" + this.$i18n.locale);
    },
    scrollToTop() {
      console.log("Hello");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },

    handleScroll() {
      // Update showLogo data property based on scroll position
      this.showLogo = window.scrollY > 75;
    },

    //get image of language path
    getImagePath(flag) {
      return require(`../../public/assets/images/${flag}`);
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll); // Add scroll event listener on component mount
  },
};
</script>

<style></style>
