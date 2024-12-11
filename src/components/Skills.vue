<script setup>
import Icon from "./Icon.vue";
</script>
<template>
  <div class="mx-auto max-w-screen-lg px-3 py-6 mb-36">
    <h2 class="text-center text-3xl font-semibold text-sky-500">
      Mes compétences
    </h2>
    <p class="mt-6 text-xl leading-9 text-justify">
      J'ai mené de nombreux projets mettant en avant mes compétences en
      <span class="font-semibold text-cyan-500">Frontend</span> et
      <span class="font-semibold text-cyan-500">UX/UI Design</span>. Ces
      réalisations m'ont permis de répondre aux besoins des utilisateurs tout en
      proposant des solutions modernes, performantes et intuitives. Voici
      quelques-unes des technologies que j'ai utilisées :
    </p>
    <div class="mt-10 flex flex-wrap justify-center gap-16">
      <Icon
        icon="devicon-react-original colored"
        size="text-8xl"
        text="React JS"
      />
      <Icon icon="devicon-vuejs-plain colored" size="text-8xl" text="Vue JS" />
      <Icon icon="devicon-nextjs-plain" size="text-8xl" text="Next JS" />
      <Icon
        icon="devicon-nuxtjs-plain colored"
        size="text-8xl"
        text="Nuxt JS"
      />
      <Icon
        icon="devicon-tailwindcss-original colored"
        size="text-8xl"
        text="Tailwind CSS"
      />
      <Icon icon="devicon-python-plain colored" size="text-8xl" text="Python" />
      <Icon
        icon="devicon-bootstrap-plain colored"
        size="text-8xl"
        text="Bootstrap"
      />
      <Icon icon="devicon-dart-plain colored" size="text-8xl" text="Dart" />
      <Icon
        icon="devicon-flutter-plain colored"
        size="text-8xl"
        text="Flutter"
      />
      <Icon icon="devicon-mysql-original" size="text-8xl" text="MySQL" />
      <Icon
        icon="devicon-microsoftsqlserver-plain colored"
        size="text-8xl"
        text="SQL Server"
      />
      <Icon
        icon="devicon-postgresql-plain colored"
        size="text-8xl"
        text="PostgreSQL"
      />
    </div>
    <p class="mt-20 text-xl leading-9 text-justify">
      En complément de mes compétences en
      <span class="font-semibold text-cyan-500">Frontend</span> et
      <span class="font-semibold text-cyan-500">UX/UI Design</span>, j'ai
      développé une expertise solide dans le domaine de la
      <span class="font-semibold text-cyan-500">monétique</span>. Cela inclut
      une maîtrise des standards internationaux tels que
      <span class="font-semibold">ISO 8583</span> (Visa, Mastercard, GIM-UEMOA),
      la conformité aux normes <span class="font-semibold">PCI-DSS</span> et
      <span class="font-semibold">3D Secure</span>, ainsi que l'analyse de
      cartes EMV. Mes compétences couvrent également les protocoles
      <span class="font-semibold">NDC</span> et
      <span class="font-semibold">SID</span>, les services de
      <span class="font-semibold">mobile banking</span>, la gestion des
      opérations en back-office monétique et l'évaluation des
      <span class="font-semibold">risques monétiques</span>.
    </p>
  </div>
</template>
