<template>
  <v-row class="full-h" no-gutters>
    <v-col
      align="center"
      class="d-flex flex-column align-center justify-center"
    >
      <v-card
        height="500"
        class="d-flex align-center mx-auto justify-center"
        color="primary"
        flat
        width="500"
      >
        <v-form ref="registerForm">
          <!-- Logo -->

          <v-card outlined class="mt-4">
            <v-img
              height="50"
              width="190"
              src="/img/diningLogo-transparent.png"
              contain
            ></v-img>
          </v-card>
          <span style="color: white"
            >Savor the Flavor, Indulge in Delight!</span
          >

          <v-text-field
            class="mt-4"
            solo
            v-model="loginData.name"
            hide-details
            required
            single-line
            placeholder="Name"
            @keyup.enter="initRegister()"
          ></v-text-field>

          <v-text-field
            class="mt-4"
            solo
            v-model="loginData.phone"
            hide-details
            required
            single-line
            placeholder="Phone"
            @keyup.enter="initRegister()"
          ></v-text-field>

          <v-text-field
            class="mt-4"
            solo
            v-model="loginData.email"
            required
            single-line
            placeholder="Email"
            :rules="emailRules"
            @keyup.enter="initRegister()"
          ></v-text-field>

          <v-text-field
            solo
            v-model="loginData.password"
            placeholder="Password"
            required
            :rules="[(v) => !!v || 'Password is required']"
            :type="showPassword ? 'text' : 'password'"
            :append-icon="showPassword ? 'mdi-eye-outline' : 'eye-off-outline'"
            @click:append="showPassword = !showPassword"
            @keyup.enter="initRegister()"
          ></v-text-field>

          <v-btn
            depressed
            block
            height="45"
            class="secondary text-capitalize"
            :loading="loader"
            @click="initRegister()"
          >
            Register
          </v-btn>

          <div
            class="d-flex flex-column my-5 white--text align-center justify-center"
          >
            <v-divider
              style="width: 250px"
              color="white"
              class="my-5"
            ></v-divider>

            <small
              >Have an account?
              <nuxt-link class="secondary--text" to="/login">Login</nuxt-link>
            </small>
          </div>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "LoginPage",
  layout: "authLayout",
  data() {
    return {
      loader: false,
      loginData: {
        email: null,
        password: null,
        phone: null,
        gender: null,
      },
      showPassword: false,
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  methods: {
    async initRegister() {
      this.$router.push("/restaurants/");
      // if (this.$refs.registerForm.validate()) {
      //   try {
      //     this.loader = true;
      //     await this.$api.diningService
      //       .signup({
      //         email: this.loginData.email,
      //         password: this.loginData.password,
      //         phone: this.loginData.phone,
      //         gender: 1,
      //       })
      //       .finally(() => {
      //         this.loader = false;
      //       });
      //     //
      //   } catch (error) {
      //     console.log(error);
      //   }
      // }
    },
  },
};
</script>

<style></style>
