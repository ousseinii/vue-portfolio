<script>
import Projects from "./Projects.vue";
import Skills from "./Skills.vue";
import Experiences from "./Experiences.vue";
import Footer from "./Footer.vue";

export default {
  components: {
    Projects,
    Skills,
    Experiences,
    Footer,
  },
};
</script>

<template>
  <Skills />
  <Projects />
  <Experiences />
  <Footer />
</template>
