<!-- // Importing Dependencies
import { Schema, model } from "mongoose";

// Defining User InfraStructure
const ResturantModal = new Schema({
    name: { type: String },
    picture: { type: Blob },
    category: { type: Array },
    price_range: { type: Number },
    description: { type: String },
    location: { city: { type: String }, country: { type: String } },
    timings: { open: { type: Date }, close: { type: Date } },
    menu: [{
        name: { type: String },
        picture: { type: Blob },
        price: { type: Number },
        category: { type: Array },
        description: { type: String }
    }]
})
// Defining Collection Name MongoDB
const UserModel = model('resturants', ResturantModal)
export default UserModel -->

<template>
  <div>
    <v-form>
      <v-card class="pa-2" flat outlined>
        <v-row>
          <v-col cols="6">
            <v-text-field
              label="Name"
              dense
              class="px-0"
              outlined
              hide-details
              v-model="restaurantData.name"
            />
          </v-col>

          <v-col cols="6">
            <v-text-field
              v-model="restaurantData.price_range"
              label="Price Range"
              type="number"
              dense
              class="px-0"
              outlined
              hide-details
            />
          </v-col>

          <v-col cols="6">
            <v-select
              v-model="restaurantData.category"
              multiple
              label="Category"
              dense
              class="px-0"
              outlined
              hide-details
            />
          </v-col>

          <v-col cols="6">
            <v-text-field
              v-model="restaurantData.location.city"
              label="City"
              dense
              outlined
              hide-details
            />
          </v-col>

          <v-col cols="6">
            <v-text-field
              v-model="restaurantData.location.country"
              label="Country"
              dense
              outlined
              hide-details
            />
          </v-col>

          <v-col cols="6">
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="restaurantData.timings.open"
                  label="Timing Open"
                  hide-details
                  outlined
                  dense
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="restaurantData.timings.open"
                no-title
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">
                  Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(date)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>

          <v-col cols="6">
            <v-menu
              ref="menu"
              v-model="menu"
              :close-on-content-click="false"
              :return-value.sync="date"
              transition="scale-transition"
              offset-y
              min-width="auto"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="restaurantData.timings.close"
                  label="Timing Close"
                  hide-details
                  outlined
                  dense
                  readonly
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker
                v-model="restaurantData.timings.close"
                no-title
                scrollable
              >
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">
                  Cancel
                </v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(date)">
                  OK
                </v-btn>
              </v-date-picker>
            </v-menu>
          </v-col>

          <v-col cols="12">
            <v-textarea
              label="Description"
              v-model="restaurantData.description"
              dense
              auto-grow
              outlined
              hide-details
            />
          </v-col>

          <v-col cols="12">
            <v-file-input
              v-model="restaurantData.picture"
              label="Picture"
              outlined
              dense
            ></v-file-input>
          </v-col>
        </v-row>

        <v-divider class="my-3"></v-divider>

        <div class="d-flex align-center justify-space-between my-2">
          <h3 class="my-2">Menu</h3>

          <v-btn @click="addItemInMenu" dark icon fab small class="primary">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </div>

        <v-expansion-panels>
          <v-expansion-panel v-for="(item, i) in restaurantData.menu" :key="i">
            <v-expansion-panel-header>
              <div>
                <span>Item</span>
                <v-btn
                  @click="removeItemsInMenu(i)"
                  dark
                  icon
                  fab
                  small
                  class="red mx-10"
                >
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </div>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-row>
                <v-col cols="4">
                  <v-text-field
                    label="Name"
                    v-model="restaurantData.menu.name"
                    dense
                    class="px-0"
                    outlined
                    hide-details
                  />
                </v-col>

                <v-col cols="4">
                  <v-text-field
                    label="Price"
                    v-model="restaurantData.menu.price"
                    type="number"
                    dense
                    class="px-0"
                    outlined
                    hide-details
                  />
                </v-col>

                <v-col cols="4">
                  <v-select
                    multiple
                    v-model="restaurantData.menu.category"
                    label="Category"
                    dense
                    class="px-0"
                    outlined
                    hide-details
                  />
                </v-col>

                <v-col cols="12">
                  <v-textarea
                    auto-grow
                    v-model="restaurantData.menu.description"
                    label="Description"
                    dense
                    outlined
                    hide-details
                  />
                </v-col>

                <v-col cols="12">
                  <v-file-input
                    v-model="restaurantData.menu.picture"
                    label="Picture"
                    outlined
                    dense
                  ></v-file-input>
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card>
    </v-form>
  </div>
</template>

<script>
export default {
  data: () => ({
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
    restaurantData: {
      name: null,
      picture: null,
      category: [],
      price_range: null,
      description: null,
      location: { city: null, country: null },
      timings: { open: null, close: null },
      menu: [
        {
          name: null,
          picture: null,
          price: null,
          category: null,
          description: null,
        },
      ],
    },
  }),
  methods: {
    addItemInMenu() {
      this.restaurantData.menu.push({
        name: null,
        picture: null,
        price: null,
        category: null,
        description: null,
      });
    },
    removeItemsInMenu(index) {
      this.restaurantData.menu?.splice(index, 1);
    },
  },
};
</script>
<style></style>
