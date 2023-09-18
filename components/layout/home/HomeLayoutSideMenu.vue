<script setup lang="ts">
const drawer = ref<boolean>(true)
const rail = ref<boolean>(false)
const avatarIcon = ref<string>('')
</script>

<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        v-model="drawer"
        :rail="rail"
        permanent
        @click="rail = false"
      >
        <v-list-item :prepend-avatar="avatarIcon" title="Your name" nav>
          <template #append>
            <v-btn
              variant="text"
              icon="mdi-chevron-left"
              @click.stop="rail = !rail"
            ></v-btn>
          </template>
        </v-list-item>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-home-city" title="Home" value="home" />
          <v-list-item
            prepend-icon="mdi-account"
            title="My Account"
            value="account"
          />
        </v-list>
      </v-navigation-drawer>
      <v-main style="height: 250px"></v-main>
    </v-layout>
  </v-card>
</template>

<style lang="scss">
.home-side-menu {
  width: 100%;
  padding: 8px 16px;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 50%);
  z-index: 10;
  &__logo {
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    cursor: pointer;
  }
  &__button {
    width: 40px;
    margin: 16px 0;
  }
  &__project-name {
    margin: 0 0 0 48px;
    color: #fff;
    font-weight: bold;
  }
}
</style>
