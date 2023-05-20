<template>
  <div>
    <h1>Orders</h1>

    <v-card rounded="lg">
      <v-list subheader two-line>
        <v-list-item v-for="folder in folders" :key="folder.title">
          <v-list-item-avatar>
            <v-icon class="red lighten-1" dark> mdi-food </v-icon>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>
              {{ folder.title }}
            </v-list-item-title>

            <v-list-item-subtitle> {{ folder.subtitle }}</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-btn icon>
              <v-icon color="grey lighten-1">mdi-information</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>
<script>
export default {
  data: () => ({
    files: [
      {
        color: "blue",
        icon: "mdi-clipboard-text",
        subtitle: "Jan 20, 2014",
        title: "Vacation itinerary",
      },
      {
        color: "amber",
        icon: "mdi-gesture-tap-button",
        subtitle: "Jan 10, 2014",
        title: "Kitchen remodel",
      },
    ],
    folders: [
      {
        subtitle: "Jan 9, 2014",
        title: "Burger",
      },
      {
        subtitle: "Jan 17, 2014",
        title: "Chips",
      },
      {
        subtitle: "Jan 28, 2014",
        title: "Juice",
      },
    ],
  }),
};
</script>

<style></style>
