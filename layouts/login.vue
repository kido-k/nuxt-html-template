<script setup lang="ts"></script>

<template>
  <v-app class="login-layout">
    <LayoutLoginLayoutHeader class="login-layout__header" />
    <div class="login-layout__contents">
      <slot />
    </div>
  </v-app>
</template>

<style lang="scss">
.login-layout {
  height: 100%;
  &__contents {
    height: 100%;
    background-color: #ececec;
  }
}
</style>
