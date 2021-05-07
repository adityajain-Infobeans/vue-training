<template>
  <div>
    <v-card width="400" class="mx-auto mt-5">
      <v-card-title>
        <h1 class="display-1">Login</h1>
      </v-card-title>

      <v-card-text>
        <v-form>
          <v-text-field
            name="email"
            label="Email"
            id="Email"
            prepend-icon="mdi-account-circle"
            type="email"
          ></v-text-field>
          <v-text-field
            name="Password"
            label="Password"
            id="Password"
            :type="showPassword ? 'text' : 'password'"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          ></v-text-field>
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color="success">Registration </v-btn>
        <v-spacer></v-spacer>
        <v-btn color="info">Login </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  data: () => ({
    showPassword: false,
  }),
};
</script>
