<script setup lang="ts">
const layoutSideMenuItems: { name: string; icon: string }[] = [
  { name: 'box', icon: 'mdi-square-outline' },
  { name: 'text', icon: 'mdi-format-text' },
  { name: 'image', icon: 'mdi-image-outline' },
]
</script>

<template>
  <div model-value class="layouts-side-menu">
    <v-card class="layouts-side-menu__card">
      <v-list>
        <v-btn
          v-for="(item, i) in layoutSideMenuItems"
          :key="i"
          icon
          flat
          class="layouts-side-menu__button"
        >
          <v-icon :icon="item.icon" />
        </v-btn>
      </v-list>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
.layouts-side-menu {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 16px;
  text-align: center;
  &__card {
    padding: 32px 0;
    border-radius: 48px;
    width: 56px;
  }
  &__button {
    margin: 4px 0;
  }
}
</style>
