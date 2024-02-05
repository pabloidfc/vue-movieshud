<script setup lang="ts">
import MainHeader from '../components/layout/MainHeader.vue';
import SearchInput from '../components/SearchInput.vue';
import TrendsSection from '../components/TrendsSection.vue';
</script>

<template>
  <MainHeader />
  <main class="flex flex-col items-center w-full px-5 text-white">
    <section class="w-full">
      <SearchInput />
    </section>
    <TrendsSection />
  </main>
</template>

<style scoped></style>
