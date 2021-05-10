<template >
  <v-card light class="mt-8">
    <v-form>
      <v-container>
        <div v-if="type === 'add'">
          <h1 class="h1">Open Support Ticket</h1>
          <p class="caption">
            Please fill in the form below to open a new ticket.
          </p>
        </div>
        <div v-else-if="type === 'update'">
          <h1 class="h1">Update Your Ticket</h1>
          <p class="caption">
            Please fill in the form below to update your ticket.
          </p>
        </div>
        <div v-else>
          <h1 class="h1">Your Ticket</h1>
        </div>

        <v-row class="mt-4">
          <v-col cols="12">
            <v-text-field
              v-model="subject"
              label="Subject"
              name="subject"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-select
              :items="priorities"
              label="Priority"
              name="priority"
            ></v-select>
          </v-col>

          <v-col cols="12">
            <v-text-field
              name="contactNo"
              v-model="contactNo"
              label="Contact Number"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-textarea
              name="description"
              label="Description"
              value=""
            ></v-textarea>
          </v-col>

          <v-col cols="12">
            <v-btn block color="primary" dark>Submit</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>
  </v-card>
</template>

<script>
export default {
  props: ['type'],
  data: () => ({
    priorities: ['P1 -- Critical', 'P2 -- High', 'P3 -- Medium'],
  }),
};
</script>

<style>
</style>
