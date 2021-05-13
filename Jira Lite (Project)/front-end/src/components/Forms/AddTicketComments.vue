<template >
  <v-container class="mt-5">
    <v-card light class="px-10 pb-10">
      <v-row v-if="isHR" class="mb-5">
        <v-col cols="12" sm="4" class="offset-sm-3">
          <v-select
            :items="priorities"
            label="Priority"
            name="priority"
            v-model="priority"
            :rules="priorityRules"
            required
          ></v-select>
        </v-col>

        <v-col cols="12" sm="4" class="my-auto">
          <v-btn block color="primary" dark :disabled="priorityChanged"
            >Change Priority</v-btn
          >
        </v-col>
      </v-row>

      <v-divider></v-divider>

      <v-row class="mt-10">
        <v-col cols="12">
          <v-textarea
            name="comment"
            label="Write your comment here"
            v-model="comment"
            :disabled="ifView"
            :rules="commentRules"
            solo
            outlined
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-spacer></v-spacer>
        <v-btn color="primary" dark>Submit Comment</v-btn>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: ['type'],
  data: () => ({
    priorities: ['P1 -- Critical', 'P2 -- High', 'P3 -- Medium'],

    priority: null,

    priorityRules: [(v) => !!v || 'Please select a priority level.'],
  }),

  computed: {
    isFormValid: () => {},
    isHR() {
      return 1;
    },
    priorityChanged() {
      return 0;
    },
  },
};
</script>

<style>
</style>
