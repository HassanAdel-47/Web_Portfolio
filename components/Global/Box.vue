<template>
  <div
    class="card border-0 relative bg-white rounded-3xl shadow-lg overflow-hidden w-72 h-72 bg-cover bg-center bg-no-repeat"
  >
    <img
      class="w-full h-full"
      :src="require(`../../public/assets/images/${img}`)"
      alt="Card Image"
    />

    <!-- Hidden Div with Text (Shows on Hover) -->
    <div
      class="flex flex-col justify-evenly items-center h-full absolute top-0 left-0 right-0 py-4 px-6 bg-gray-950 bg-opacity-90 opacity-0 hover:opacity-100 transition-opacity duration-1000 text-center"
    >
      <h1 class="text-xl my-5 whitespace-nowrap">{{ title }}</h1>
      <div>
        <h1 class="text-lg text-blue-400">{{ $t("UsedTechnologies") }}</h1>
        <p class="text-white">{{ technologies }}</p>
      </div>
      <a
        target="_blank"
        :href="link"
        class="text-blue-400 cursor-pointer hover:text-blue-700 duration-1000"
        >{{ $t("Visit") }}</a
      >
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      image: this.img,
    };
  },
  props: { title: String, technologies: String, img: String, link: String },
};
</script>

<style></style>
