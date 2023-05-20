<template>
  <v-card class="filters__section" flat outlined>
    <v-card-title> Filters </v-card-title>
    <v-card-text>
      <div>
        <h3>Cuisine Types</h3>
        <div>
          <v-checkbox
            v-for="(type, index) in cuisineTypes"
            :key="`type-${index + 1}`"
            :label="`Checkbox`"
            dense
            hide-details
          ></v-checkbox>
        </div>
      </div>

      <div class="my-5">
        <h3 class="mb-2">Price Range</h3>
        <div>
          <v-btn-toggle color="primary" v-model="priceRange">
            <v-btn small> $ </v-btn>
            <v-btn small> $$ </v-btn>
            <v-btn small> $$$ </v-btn>
            <v-btn small> $$$$ </v-btn>
          </v-btn-toggle>
        </div>
      </div>

      <div class="my-5">
        <h3 class="mb-2">Category</h3>
        <div>
          <v-chip
            v-for="(cat, cat_index) in category"
            :key="cat_index"
            class="mr-1 my-1"
            small
            >{{ cat }}</v-chip
          >
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      cuisineTypes: [1, 2, 3, 5, 5],
      category: ["Sea Food", "BBQ", "Chineese"],
      priceRange: 0,
    };
  },
};
</script>

<style lang="scss">
.filters__section {
  h3 {
    margin-bottom: 5px !important;
  }
}
</style>
