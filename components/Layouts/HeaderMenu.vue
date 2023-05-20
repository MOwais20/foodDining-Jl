<template>
  <div class="d-flex align-center">
    <div class="text-center">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn height="45" plain dark v-bind="attrs" v-on="on">
            <div class="d-flex align-center">
              <v-avatar class="primary" :size="32">
                <v-icon> mdi-shield-account </v-icon>
              </v-avatar>

              <span class="text-capitalize black--text mx-2">Anonymous</span>
            </div>
          </v-btn>
        </template>
        <v-list class="py-1 pb-0" dense>
          <template>
            <v-list-item>
              <v-list-item-title class="text-lowercase">
                <v-chip small>
                  <!-- {{ $auth.user.email }} -->
                </v-chip>
              </v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>
          </template>

          <v-divider></v-divider>
          <v-list-item @click="logout">
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //userData: this.$auth.$state.user,
    };
  },
  methods: {
    logout() {
      this.$router.push("/login");
      this.$auth.logout();
    },
  },
};
</script>
