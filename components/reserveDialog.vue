<template>
  <div class="text-center">
    <v-dialog persistent v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn depressed color="red lighten-1" dark v-bind="attrs" v-on="on">
          Reserve
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="text-h5 red white--text lighten-1">
          Reserving
        </v-card-title>

        <v-card-text class="pa-5">
          <v-form ref="reserveForm">
            <v-row>
              <v-col cols="6">
                <v-text-field
                  outlined
                  dense
                  :rules="[rules.required]"
                  hide-details
                  type="number"
                  label="Persons"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  outlined
                  :rules="[rules.required]"
                  dense
                  hide-details
                  label="Timings"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="close"> Cancel </v-btn>
          <v-btn color="primary" text @click="book"> Book </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
    },
  },
  data() {
    return {
      dialog: false,
      rules: {
        required: (value) => !!value || "Required.",
      },
    };
  },
  methods: {
    close() {
      this.$refs?.reserveForm?.reset();
      this.dialog = false;
    },
    book() {
      if (this.$refs?.reserveForm?.validate()) {
        this.close();
      }
    },
  },
};
</script>
