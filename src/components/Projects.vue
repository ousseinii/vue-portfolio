<script>
import SingleProject from "./SingleProject.vue";

export default {
  components: {
    SingleProject,
  },

  data() {
    return {
      projects: [],
    };
  },
  mounted() {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Affiche les données dans la console pour vérifier
        this.projects = data.projects;
      })
      .catch((error) => {
        console.error("Error loading data:", error);
      });
  },
};
</script>
<template>
  <div class="mx-auto max-w-screen-lg px-3 py-6 my-16">
    <h2 class="text-center text-3xl font-semibold text-sky-500">Mes projets</h2>
    <div v-for="(project, index) in projects" :key="index">
      <!-- On passe chaque projet comme prop au composant SingleProject -->
      <SingleProject :project="project" />
    </div>
  </div>
</template>
