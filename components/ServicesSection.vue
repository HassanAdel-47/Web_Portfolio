<template>
  <section id="Services" class="bg-[#101010] p-5">
    <div class="text-white font-normal mb-10">
      <h2
        class="text-center text-4xl md:text-6xl font-normal my-10"
        data-aos="fade-in"
        data-aos-duration="1500"
      >
        {{ $t("My") }}<span class="text-blue-400"> {{ $t("myServices") }}</span>
      </h2>
      <div
        class="my-5 grid grid-cols-1 lg:grid-cols-3 gap-4 w-full justify-center items-center text-center"
      >
        <div
          v-for="(item, index) in text"
          :key="index"
          data-aos="flip-right"
          data-aos-duration="1500"
        >
          <Card :text="item.text" :title="item.title" :icon="item.icon" />
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import Card from "./Global/Card.vue";
export default {
  components: { Card },
  data() {
    return {
      text: [
        {
          icon: "mobile-screen",
          title: this.$t("Responsive"),
          text: this.$t("ResponsiveDes"),
        },
        {
          icon: "user",
          title: this.$t("WebDevelopment"),
          text: this.$t("WebDevelopmentDes"),
        },
        {
          icon: "dollar-sign",
          title: this.$t("SpecialDiscount"),
          text: this.$t("SpecialDiscountDes"),
        },
      ],
    };
  },
};
</script>

<style></style>
