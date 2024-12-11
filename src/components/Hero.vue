<script setup>
import Icon from "./Icon.vue";
</script>

<template>
  <div class="mx-auto max-w-screen-lg px-3 py-6 my-16">
    <div
      class="flex flex-col items-center md:flex-row md:justify-between md:gap-x-24"
    >
      <div>
        <h1 class="text-3xl font-bold">
          Salut, moi c'est
          <span
            class="bg-gradient-to-br from-sky-500 to-cyan-400 bg-clip-text text-transparent"
            >Ousseini</span
          >
          👋
        </h1>
        <p class="mt-6 text-xl leading-9 text-justify">
          Passionné par le
          <a
            class="text-cyan-400 hover:underline"
            href="https://github.com/ousseinii"
            >Frontend</a
          >
          et le
          <a
            class="text-cyan-400 hover:underline"
            href="https://docs.google.com/document/d/1B2_8Qhk1ecUdjF8n0UyFQhSyI-Y6b6ZSm9czpOe7pCA/edit?usp=sharing"
            >UX/UI Design</a
          >, je m'investis dans l'amélioration de l'expérience utilisateur et
          l'accessibilité numérique. Mon parcours inclut également une expertise
          en
          <a
            class="text-cyan-400 hover:underline"
            href="https://drive.google.com/file/d/14DnqtEo90K08uClwbgIbd-3sbzmNm7st/view?usp=sharing"
            >monétique</a
          >, avec un intérêt particulier pour les technologies de paiement.
        </p>

        <div class="mt-3 flex justify-center gap-6">
          <Icon
            link="https://github.com/ousseinii"
            icon="devicon-github-original"
            size="text-5xl"
          />
          <Icon
            link="https://www.linkedin.com/in/ousseini-adamou-5a16b01b8/"
            icon="devicon-linkedin-plain colored"
            size="text-5xl"
          />
        </div>
      </div>
      <div class="shrink-0 hidden lg:block animate-slowMoveUp">
        <img
          class="w-80"
          src="../assets/images/astronaute.svg"
          alt="Avatar image"
        />
      </div>
    </div>
  </div>
</template>
