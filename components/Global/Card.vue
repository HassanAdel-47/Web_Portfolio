<template>
  <div
    class="w-full rounded-3xl shadow-lg bg-[#191919] text-center p-12 h-full lg:h-96"
  >
    <div class="h-auto my-3">
      <font-awesome-icon
        :icon="['fas', icon]"
        class="text-7xl mb-7 text-blue-400"
      />
      <div class="text-xl mb-2 font-[500]">{{ title }}</div>
      <p
        class="text-gray-700 text-base text-justify flex items-center md:items-start justify-center"
      >
        {{ text }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: { title: String, text: String, icon: String },
};
</script>

<style></style>
