<template>
  <div>
    <SearchBar class="mb-5" v-if="$vuetify.breakpoint.mobile" />

    <v-row justify="center" align="start">
      <v-col v-if="!$vuetify.breakpoint.mobile" cols="3">
        <Filters />
      </v-col>

      <v-col :cols="$vuetify.breakpoint.mobile ? 12 : 9">
        <v-card flat outlined>
          <v-card-text> </v-card-text>
        </v-card>
      </v-col>
    </v-row>
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
