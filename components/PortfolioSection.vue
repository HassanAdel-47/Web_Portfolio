<template>
  <section id="Portfolio" class="bg-[#101010]">
    <div class="text-white font-normal grid place-content-center">
      <h2
        v-if="this.$i18n.locale === 'ar'"
        class="text-center text-4xl md:text-6xl font-normal mt-10"
        data-aos="fade-in"
        data-aos-duration="1500"
      >
        {{ $t("Portfo") }}<span class="text-blue-400"> {{ $t("lio") }}</span>
      </h2>
      <h2
        v-else
        class="text-center text-4xl md:text-6xl font-normal mt-10"
        data-aos="fade-in"
        data-aos-duration="1500"
      >
        {{ $t("Portfo") }}<span class="text-blue-400">{{ $t("lio") }}</span>
      </h2>
      <div
        class="my-5 container grid place-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center items-center text-center w-screen"
      >
        <div
          v-for="(item, index) in projects"
          class="flex justify-center items-center w-full place-items-center"
          :key="index"
          :data-aos="index % 2 === 0 ? 'flip-up' : 'flip-right'"
          data-aos-duration="1500"
        >
          <Box
            :title="item.title"
            :technologies="item.technologies"
            :img="item.img"
            :link="item.link"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Box from "./Global/Box.vue";
export default {
  components: { Box },
  data() {
    return {
      projects: [
        {
          title: this.$t("GaraphicPortfolio"),
          technologies: "html - css - js - Animation",
          img: "Garaphic_Portfolio.jpg",
          link: "https://hassanadel-47.github.io/GraphicPortfolio/",
        },
        {
          title: this.$t("Binfarnas"),
          technologies: "Nuxt - Vue - Vuex - bootstrap - i18n",
          img: "Binfarnas.jpg",
          link: "https://binfarnas.net/",
        },
        {
          title: this.$t("MBKSchool"),
          technologies: "Nuxt - Vue - Vuex - bootstrap - i18n",
          img: "Mbkschool.jpg",
          link: "http://mbkschool.net/",
        },
        {
          title: this.$t("VueCalculator"),
          technologies: " Vue - html - css - js  ",
          img: "Vue_Calculator.jpg",
          link: "https://stupendous-lollipop-8db41b.netlify.app/",
        },
        {
          title: this.$t("HERSEYAPP"),
          technologies: "html - css - js - bootstrap",
          img: "HERSEYAPP.png",
          link: "https://hassanadel-47.github.io/HERSEYAPP/",
        },
        {
          title: this.$t("Bootstrap"),
          technologies: "html - css - js - bootstrap ",
          img: "Bootstrap.jpg",
          link: "https://hassanadel-47.github.io/Bootstrap-Site/",
        },
        {
          title: this.$t("LandingPage"),
          technologies: "html - css - js",
          img: "Landing_Page.png",
          link: "https://hassanadel-47.github.io/Landing_Page_One/",
        },
        {
          title: this.$t("ReactTodoList"),
          technologies: "React - Bootstrap - html - css - js",
          img: "CRUD_With_Redux.jpg",
          link: "https://hassanadel-47.github.io/React-Todo-List/",
        },
        {
          title: this.$t("ReactStorewithAPI"),
          technologies: "React - Bootstrap - html - css - js - API",
          img: "React_Store.jpg",
          link: "https://hassanadel-47.github.io/Fake-API-Store/",
        },
        {
          title: this.$t("ReactCRUDWithRedux"),
          technologies: "React - Redux Tool - Bootstrap - html - css - js",
          img: "React_Todo_List.jpg",
          link: "https://hassanadel-47.github.io/Crud-With-Redux/",
        },
      ],
    };
  },
};
</script>

<style></style>
