<template >
  <v-card light class="mt-8 pa-5">
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

        <v-row class="mt-4 pa-10">
          <v-col cols="12">
            <v-text-field
              v-model="subject"
              label="Subject"
              name="subject"
              :rules="subjectRules"
              required
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-select
              :items="priorities"
              label="Priority"
              name="priority"
              v-model="priority"
              :rules="priorityRules"
              required
            ></v-select>
          </v-col>

          <v-col cols="12">
            <v-text-field
              name="contactNo"
              v-model="contactNumber"
              label="Contact Number"
              :rules="contactNumberRules"
            ></v-text-field>
          </v-col>

          <v-col cols="12">
            <v-textarea
              name="description"
              label="Description"
              v-model="description"
              :rules="descriptionRules"
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
    priorities: ['', 'P1 -- Critical', 'P2 -- High', 'P3 -- Medium'],
    subject: null,
    priority: null,
    contactNumber: null,
    description: null,
    formValidated: 'false',

    subjectRules: [
      (v) => !!v || 'Subject is required',
      (v) => (v && v.length >= 10) || 'Subject must be more than 10 characters',
    ],

    priorityRules: [(v) => !!v || 'Please select a priority level.'],

    contactNumberRules: [
      (v) => {
        if (v) {
          if (v.length !== 10) {
            return 'Invalid length';
          }
          if (!/^[6-9]\d{9}$/.test(v)) {
            return 'Invalid mobile number';
          }
          return true;
        }
        return true;
      },
    ],

    descriptionRules: [
      (v) => !!v || 'Please write a valid description.',
      (v) =>
        // eslint-disable-next-line implicit-arrow-linebreak
        (v && v.length >= 50) || 'Description must be more than 50 characters',
    ],
  }),

  computed: {
    isFormValid: () => {},
  },
};
</script>

<style>
</style>
