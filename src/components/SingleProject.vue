<script>
export default {
  props: {
    project: Object, // On attend une propriété 'project' de type Object
  },
  methods: {
    getRandomColor() {
      const colors = [
        "bg-red-400 text-red-900",
        "bg-blue-400 text-blue-900",
        "bg-green-400 text-green-900",
        "bg-yellow-400 text-yellow-900",
        "bg-purple-400 text-purple-900",
        "bg-pink-400 text-pink-900",
        "bg-indigo-400 text-indigo-900",
        "bg-teal-400 text-teal-900",
      ];
      const randomIndex = Math.floor(Math.random() * colors.length);
      return colors[randomIndex];
    },
  },
};
</script>

<template>
  <div
    class="flex flex-col items-center gap-x-8 rounded-md bg-slate-800 p-3 md:flex-row my-10"
  >
    <div>
      <div class="flex flex-col items-center gap-y-2 md:flex-row">
        <a class="hover:text-cyan-400" href=""
          ><div class="text-xl font-semibold">{{ project.name }}</div></a
        >
        <div class="ml-3 flex gap-2">
          <div
            v-for="(tech, techIndex) in project.technologies"
            :key="techIndex"
            :class="`rounded-md px-2 py-1 text-xs font-semibold ${getRandomColor()}`"
          >
            {{ tech }}
          </div>
        </div>
      </div>
      <p class="mt-3 text-gray-400">
        {{ project.description }}
      </p>
    </div>
  </div>
</template>
