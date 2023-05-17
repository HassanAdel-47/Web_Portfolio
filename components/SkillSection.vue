<template>
  <section id="Skills" class="py-20 bg-[#191919]" dir="ltr">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2
        class="text-4xl md:text-6xl font-normal text-blue-400 mb-10 text-center"
        data-aos="fade-in"
        data-aos-duration="1500"
      >
        {{ $t("MySkill") }} <span class="text-white">{{ $t("Skills") }} </span>
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="(skill, index) in skills"
          :key="index"
          :data-aos="index % 2 === 0 ? 'flip-left' : 'flip-right'"
          data-aos-duration="1500"
        >
          <div class="flex items-center mb-3">
            <div class="w-1/3">
              <span class="text-lg font-normal text-white uppercase">{{
                skill.name
              }}</span>
            </div>
            <div class="w-2/3">
              <div class="relative pt-1">
                <div
                  class="w-3/4 overflow-hidden h-2 mx-8 mb-4 text-xs flex rounded bg-gray-200"
                >
                  <div
                    class="bg-blue-400"
                    :style="`width:${skill.percent}`"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      skills: [
        { name: "HTML", percent: "100%" },
        { name: "CSS", percent: "98%" },
        { name: "Scss", percent: "98%" },
        { name: "JavaScript (ES6)", percent: "90%" },
        { name: "Bootstrap", percent: "90%" },
        { name: "Tailwind CSS", percent: "85%" },
        { name: "Vue JS (Vuex)", percent: "85%" },
        { name: "React JS (Redux)", percent: "75%" },
        { name: "Nuxt Js", percent: "80%" },
        { name: "API", percent: "70%" },
        { name: "Adobe Photoshop", percent: "90%" },
        { name: "Adobe Illustrator", percent: "70%" },
      ],
    };
  },
};
</script>

<style></style>
