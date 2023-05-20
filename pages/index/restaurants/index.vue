<template>
  <div>
    <h1>Restaurnats</h1>
    <v-row justify="center" align="start">
      <v-col v-if="!$vuetify.breakpoint.mobile" cols="3">
        <Filters />
      </v-col>

      <v-col :cols="$vuetify.breakpoint.mobile ? 12 : 9">
        <v-card flat outlined>
          <v-card-text>
            <MainView />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
