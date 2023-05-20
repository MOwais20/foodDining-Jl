<template>
  <v-card flat outlined>
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
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      cuisineTypes: [1, 2, 3, 5, 5],
    };
  },
};
</script>

<style></style>
