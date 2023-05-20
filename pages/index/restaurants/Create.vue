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
    <v-form ref="createData">
      <v-card class="pa-2" flat outlined>
        <v-row>
          <v-col cols="6">
            <v-text-field
              label="Name"
              rule
              dense
              class="px-0"
              outlined
              hide-details
              :rules="[rules.required]"
              v-model="restaurantData.name"
            />
          </v-col>

          <v-col cols="6">
            <v-text-field
              v-model="restaurantData.price_range"
              :rules="[rules.required]"
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
              :items="categoryTypes"
              :rules="[(v) => !!v || 'Item is required']"
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
              :rules="[rules.required]"
              label="City"
              dense
              outlined
              hide-details
            />
          </v-col>

          <v-col cols="6">
            <v-text-field
              v-model="restaurantData.location.country"
              :rules="[rules.required]"
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
                  :rules="[rules.required]"
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
                  :rules="[rules.required]"
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
              :rules="[rules.required]"
              dense
              auto-grow
              outlined
              hide-details
            />
          </v-col>

          <v-col cols="12">
            <v-text-field
              label="Picture URL"
              v-model="restaurantData.picture"
              :rules="[rules.required]"
              dense
              class="px-0"
              outlined
              hide-details
            />
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
                    :rules="[rules.required]"
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
                    :rules="[rules.required]"
                    class="px-0"
                    outlined
                    hide-details
                  />
                </v-col>

                <v-col cols="4">
                  <v-select
                    multiple
                    v-model="restaurantData.menu.category"
                    :items="categoryTypes"
                    label="Category"
                    :rules="[(v) => !!v || 'Item is required']"
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
                    :rules="[(v) => !!v || 'Item is required']"
                    label="Description"
                    dense
                    outlined
                    hide-details
                  />
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    label="Menu Picture URL"
                    v-model="restaurantData.menu.picture"
                    :rules="[(v) => !!v || 'Item is required']"
                    dense
                    class="px-0"
                    outlined
                    hide-details
                  />
                </v-col>
              </v-row>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>

        <v-card-actions class="my-5">
          <v-spacer></v-spacer>
          <v-btn :loading="loading" @click="submit" color="success">
            Submit
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-form>
  </div>
</template>

<script>
// import saveFileToFirebase from "@/plugins/firebase.js";

export default {
  data: () => ({
    date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
      .toISOString()
      .substr(0, 10),
    menu: false,
    loading: false,
    modal: false,
    menu2: false,
    rules: {
      required: (value) => !!value || "Required.",
    },
    categoryTypes: ["BBQ", "Fast Food", "Desi", "Thai", "Chinese"],
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
  created() {
    console.log("API", this.$api.diningService.createRestaurants());
  },
  methods: {
    submit() {
      if (this.$refs?.createData?.validate()) {
        this.loading = true;
        this.$api.diningService
          .createRestaurants(this.restaurantData)
          .then((response) => {
            this.$swal.fire({
              toast: true,
              timerProgressBar: true,
              position: "top-end",
              icon: "success",
              text: response?.message || "Items added.",
              showConfirmButton: false,
              timer: 2000,
              didOpen: (toast) => {
                toast.addEventListener("mouseenter", this.$swal.stopTimer);
                toast.addEventListener("mouseleave", this.$swal.resumeTimer);
              },
            });
          })
          .finally(() => (this.loading = false));
      }
    },
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
