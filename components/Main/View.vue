<template>
  <div>
    <v-card
      flat
      outlined
      :loading="loading"
      class="d-flex align-start"
      height="250"
    >
      <v-img
        height="250"
        src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
      ></v-img>

      <div class="pa-3">
        <v-row no-gutters align="center" class="mx-0">
          <v-col>
            <h2>Cafe Badilico</h2>

            <div class="d-flex align-center my-1">
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ms-4">4.5 (413)</div>
            </div>
          </v-col>
        </v-row>

        <div class="my-1 text-subtitle-1">$ • Italian, Cafe</div>

        <div>
          Small plates, salads & sandwiches - an intimate setting with 12 indoor
          seats plus patio seating.
        </div>

        <div>
          <v-chip-group
            v-model="selection"
            active-class="deep-purple accent-4 white--text"
            column
          >
            <v-chip>5:30PM</v-chip>

            <v-chip>7:30PM</v-chip>

            <v-chip>8:00PM</v-chip>

            <v-chip>9:00PM</v-chip>
          </v-chip-group>

          <v-divider></v-divider>

          <v-btn color="deep-purple lighten-2" text @click="reserve">
            Reserve
          </v-btn>
        </div>
      </div>

      <!-- <v-card-title>Tonight's availability</v-card-title> -->
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    selection: 1,
  }),

  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>

<style></style>
