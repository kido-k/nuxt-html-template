<script setup lang="ts">
definePageMeta({
  layout: 'login',
})
</script>

<template>
  <v-container class="login-page">
    <PageLoginPageForm />
  </v-container>
</template>

<style lang="scss" scoped>
.login-page {
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
