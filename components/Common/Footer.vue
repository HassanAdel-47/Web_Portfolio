<template>
  <footer
    id="Services"
    class="bg-[#191919] flex items-center justify-center"
    dir="ltr"
  >
    <div class="flex items-center justify-between container">
      <div class="flex">
        <a
          v-for="(item, index) in socialLinks"
          :key="index"
          :href="item.link"
          target="_blank"
          class="text-white w-8 h-8 md:w-12 md:h-12 bg-blue-400 p-2 flex justify-center items-center mx-1 rounded-full"
        >
          <i
            :class="[
              'fa-brands',
              item.icon,
              'fontawesome',
              'text-xl',
              'md:text-3xl',
            ]"
          ></i>
        </a>
      </div>
      <p class="text-white text-sm md:text-lg">
        Made With
        <span>
          <font-awesome-icon :icon="['fas', 'heart']" class="text-red-700"
        /></span>
        and
        <span>
          <font-awesome-icon
            :icon="['fas', 'mug-hot']"
            class="text-amber-800 mx-1"
        /></span>
      </p>
      <button @click="scrollToTop">
        <NuxtLink to="/">
          <img
            class="w-16 md:w-24"
            src="../../public/assets/images/15.png"
            alt=""
          />
        </NuxtLink>
      </button>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      socialLinks: [
        {
          icon: "fa-facebook-f",
          link: "https://www.facebook.com/profile.php?id=100081664762786",
        },
        {
          icon: "fa-whatsapp",
          link: "https://api.whatsapp.com/send?phone=963985942976",
        },
        {
          icon: "fa-telegram",
          link: "https://t.me/hassanadel3886",
        },
      ],
    };
  },
};
</script>

<style></style>
