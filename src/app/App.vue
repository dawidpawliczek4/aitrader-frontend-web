<template>
  <v-app class="fill-height" theme="traderTheme">
    <AppBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
  <AppFooter />
  <AppDialog />
</template>

<script setup lang="ts">
import AppBar from './components/AppBar.vue';
import AppFooter from './components/AppFooter.vue';
import AppDialog from './components/AppDialog.vue';
</script>

<style scoped></style>