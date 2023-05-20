<template>
  <div>
    <SearchBar class="mb-5" v-if="$vuetify.breakpoint.mobile" />

    <v-card
      flat
      outlined
      rounded="xl"
      height="50"
      max-width="600"
      class="primary mx-auto d-flex align-center mb-3"
    >
      <v-card-text class="d-flex align-center justify-space-between">
        <v-btn to="/restaurants" small depressed rounded> Restaurants </v-btn>

        <v-btn to="/orders" small depressed rounded> Orders </v-btn>

        <v-btn to="/reservations" small depressed rounded> Reservations </v-btn>

        <v-btn to="/track-order" small depressed rounded> Track Order </v-btn>
      </v-card-text>
    </v-card>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {};
  },
};
</script>
