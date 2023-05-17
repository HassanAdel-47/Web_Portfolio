<template>
  <div>
    <Preloader v-if="loading" />
    <div v-else>
      <Header />
      <Nuxt />
      <Footer />
    </div>
    <TopButton v-if="showBackToTopButton" />
  </div>
</template>

<script>
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";
import TopButton from "../components/Global/TopButton.vue";
import Preloader from "../components/Global/Preloader.vue";
export default {
  name: "app",
  data() {
    return {
      loading: true,
      showBackToTopButton: false,
    };
  },

  components: {
    Header,
    Footer,
    TopButton,
    Preloader,
  },

  head() {
    return {
      htmlAttrs: {
        lang: this.$i18n.locale,
        dir: this.$i18n.locale === "ar" ? "rtl" : "ltr",
      },
    };
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
    console.log("loading", this.loading);
    setTimeout(
      function () {
        this.loading = false;
        console.log("loading", this.loading);
      }.bind(this),
      2000
    );
  },

  methods: {
    handleScroll() {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > 100) {
        this.showBackToTopButton = true;
      } else {
        this.showBackToTopButton = false;
      }
    },
  },
};
</script>

<style></style>
