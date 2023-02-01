<template>
  <v-container>
    <v-form>
      <v-text-field label="Account number" v-model="accountNumber"></v-text-field>
      <v-text-field label="Amount to deposit" v-model="amount"></v-text-field>
      <v-btn @click="save">Salvesta</v-btn>
    </v-form>
  </v-container>
</template>

<script setup>
import {inject, ref} from 'vue';

const axios = inject('axios');

const accountNumber = ref("");
const amount = ref("");

function save() {
  // teeb päringu http://localhost:3030/api/solution/account/deposit/{accountNumber}/{amount}
  let url = "api/solution/account/deposit/"+accountNumber.value+"/"+amount.value
  axios.put(url)
}

</script>
