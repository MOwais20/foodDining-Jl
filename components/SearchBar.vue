<template>
  <v-text-field
    label="Search Restaurants, Menus"
    class="px-0"
    solo
    hide-details
  >
    <template v-slot:append>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <div v-on="on" class="primary pa-1 rounded-xl">
            <v-icon dark> mdi-magnify </v-icon>
          </div>
        </template>
        I'm a tooltip
      </v-tooltip>
    </template>
  </v-text-field>
</template>

<script>
export default {};
</script>

<style></style>
