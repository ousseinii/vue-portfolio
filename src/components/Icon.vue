<script setup>
const props = defineProps({
  text: String,
  link: String,
  icon: String,
  size: String,
});
</script>

<template>
  <a class="text-center font-semibold" :href="link" target="_blank">
    <i :class="`${icon} ${size}`"></i>
    <br />
    <br />
    {{ text }}
  </a>
</template>
