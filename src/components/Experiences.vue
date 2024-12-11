<script>
import SingleExperience from "./SingleExperience.vue";

export default {
  data() {
    return {
      experiences: [],
    };
  },

  components: {
    SingleExperience,
  },

  mounted() {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        this.experiences = data.experiences;
      })
      .catch((error) => {
        console.error("Error loading data:", error);
      });
  },
};
</script>

<template>
  <div class="mx-auto max-w-screen-lg px-3 py-6 my-16">
    <h2 class="text-center text-3xl font-semibold text-sky-500">
      Mes expériences
    </h2>
    <div v-for="(experience, index) in experiences" :key="index">
      <SingleExperience :experience="experience" />
    </div>
  </div>
</template>
