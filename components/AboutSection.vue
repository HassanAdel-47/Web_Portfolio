<template>
  <section
    id="About"
    class="bg-[#191919] h-auto flex flex-col lg:flex-row items-center justify-center"
  >
    <div
      class="px-4 About-text w-full text-white lg:w-1/2 flex flex-col justify-center text-center lg:text-start"
      data-aos="flip-left"
      data-aos-duration="1500"
    >
      <h2 class="text-4xl md:text-6xl my-3 font-normal">
        <span class="text-blue-400">{{ $t("About") }}</span>
        {{ $t("Me") }}
      </h2>

      <h5 class="text-base lg:text-lg my-2 font-normal whitespace-nowrap">
        {{ $t("Web") }} {{ $t("Developer") }}
        <span class="text-blue-400">& </span>{{ $t("Graphic") }}
        {{ $t("Designer") }}
      </h5>

      <p class="font-light text-xs md:text-base text-slate-400 text-justify">
        {{ $t("Brief") }}
      </p>
      <hr class="border-t-2 bg-blue-400 my-2" />
      <div class="my-2 flex">
        <font-awesome-icon
          :icon="['fas', 'graduation-cap']"
          class="text-4xl my-2"
        />
        <div
          class="align-items-center flex flex-col justify-content-center w-100"
        >
          <h2 class="text-base lg:text-xl text-blue-400">
            {{ $t("AllepoUniversity") }}
          </h2>
          <p class="text-sm lg:text-base">
            {{ $t("InformationTechnology") }}
          </p>
        </div>
      </div>
    </div>
    <div
      class="About-image w-screen md:w-3/5 lg:w-2/5 self-center justify-end my-14"
      data-aos="fade-up"
      data-aos-duration="1500"
    >
      <img src="../public/assets/images/about en.png" alt="" />
    </div>
    <input v-model="myname" placeholder="Enter your name" />
    <p>Welcome, {{ fullName }}</p>
  </section>
</template>
<script>
export default {
  data() {
    return {
      myname: "",
      fullName: "",
    };
  },
  watch: {
    myname(newName) {
      return (this.fullName = newName);
    },
  },
};
</script>

<style></style>
