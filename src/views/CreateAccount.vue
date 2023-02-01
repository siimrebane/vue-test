<template>
  <v-container>
    <v-form>
      <v-text-field label="Account Number" v-model="account.accountNumber"></v-text-field>
      <v-text-field label="First Name" v-model="account.firstName"></v-text-field>
      <v-text-field label="Last Name" v-model="account.lastName"></v-text-field>
      <v-btn @click="save">Salvesta</v-btn>
    </v-form>
  </v-container>
</template>

<script setup>
import {inject, ref} from 'vue';

const axios = inject('axios');

const account = ref({});

function save() {
  // teeb päringu http://localhost:3030/api/solution/account
  axios.post('api/solution/account', account.value)
}

</script>
