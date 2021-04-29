<template>
  <div>
    <h1>Hello World</h1>
    <v-btn class="pink white--text">Click me</v-btn>
    <v-btn dark depressed color="pink ">click me</v-btn>
    <v-btn flat color="pink">click me</v-btn>

    <v-btn depressed class="pink white--text"
      ><v-icon left>mdi-email-remove</v-icon> click me</v-btn
    >

    <v-btn depressed small class="pink white--text"
      ><v-icon small left>mdi-email-remove</v-icon> click me</v-btn
    >

    <v-btn depressed large class="pink white--text">
      <span>click me</span>
      <v-icon right large>mdi-email-remove</v-icon>
    </v-btn>

    <v-btn fab depressed small dark color="purple">
      <v-icon>mdi-email-remove</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {};
</script>
