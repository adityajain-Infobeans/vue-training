/* eslint-disable no-return-assign */ /* eslint-disable quotes */
<template>
  <p v-if="error" data-testid="message-error">{{ error }}</p>
  <p v-else data-testid="message">{{ message.text }}</p>
</template>

<script>
import { getMessage } from '@/services/axios';

export default {
  data() {
    return {
      message: {},
      error: null,
    };
  },

  created() {
    getMessage()
      // eslint-disable-next-line arrow-parens
      // eslint-disable-next-line no-return-assign
      .then((response) => (this.message = response))
      // eslint-disable-next-line arrow-parens
      // eslint-disable-next-line no-return-assign
      .catch((error) => {
        this.error = 'Oops! Something went wrong';
        console.log(error);
      });
  },
};
</script>
