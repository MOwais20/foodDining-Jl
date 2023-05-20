<template>
  <v-app class="application__bg" dark>
    <v-main>
      <v-container style="height: 100%" fluid>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.application__bg {
  background: #f1f5f9 !important;
}
</style>
