<template>
  <div>
    <SearchBar class="mb-5" v-if="$vuetify.breakpoint.mobile" />

    <v-card
      flat
      outlined
      rounded="xl"
      min-height="50"
      max-width="600"
      class="primary mx-auto d-flex align-center mb-3"
    >
      <v-card-text class="d-flex flex-wrap align-center justify-space-between">
        <v-btn class="my-1" to="/restaurants" small depressed rounded>
          Restaurants
        </v-btn>

        <v-btn class="my-1" to="/orders" small depressed rounded>
          Orders
        </v-btn>

        <v-btn class="my-1" to="/reservations" small depressed rounded>
          Reservations
        </v-btn>

        <v-btn class="my-1" to="/track-order" small depressed rounded>
          Track Order
        </v-btn>
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
  created() {
    if (this.$route.path == "/") this.$router.push("/restaurants");
  },
};
</script>
