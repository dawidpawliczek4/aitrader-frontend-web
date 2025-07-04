<template>
    <p>This is a dashboard. Here, we can check sentiment, predictions, fine-tune models and do other things.</p>
    <v-btn @click="getData">Get data printed to console</v-btn>
</template>

<script setup lang="ts">
import { useDashboardStore } from '../store';

const dashboardStore = useDashboardStore()

async function getData() {
    const data = await dashboardStore.getDummyData()
    console.log(data)
}
</script>


<style scoped></style>