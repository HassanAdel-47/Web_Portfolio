<!-- Please remove this file from your project -->
<template>
  <div>
    <FirstSection />
    <AboutSection />
    <ServicesSection />
    <SkillSection />
    <PortfolioSection />
  </div>
</template>

<script>
import FirstSection from "./FirstSection.vue";
import AboutSection from "./AboutSection.vue";
import ServicesSection from "./ServicesSection";
import PortfolioSection from "./PortfolioSection.vue";
import SkillSection from "./SkillSection.vue";
export default {
  name: "NuxtTutorial",
  components: {
    FirstSection,
    AboutSection,
    ServicesSection,
    PortfolioSection,
    SkillSection,
  },
};
</script>
