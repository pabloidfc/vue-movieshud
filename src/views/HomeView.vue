<script setup lang="ts">
import MainHeader from '../components/layout/MainHeader.vue';
import SearchInput from '../components/SearchInput.vue';
</script>

<template>
  <MainHeader />
  <main class="flex flex-col items-center w-full px-5">
    <section class="w-full">
      <SearchInput />
    </section>
  </main>
</template>

<style scoped></style>
