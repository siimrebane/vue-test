<template>
  <v-container>
    <v-form>
      <v-text-field label="Owner last name" v-model="lastName"></v-text-field>
      <v-btn @click="search">Search</v-btn>
    </v-form>
    <v-table>
      <thead>
        <th>Account Number</th>
        <th>Balance</th>
        <th>Locked</th>
      </thead>
      <tbody>
        <tr v-for="account in accounts" :key="account.accountNumber">
          <td>{{ account.accountNumber }}</td>
          <td>{{ account.balance }}</td>
          <td>{{ account.locked }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script setup>
import {inject, ref} from 'vue';

const axios = inject('axios');

const lastName = ref('');
const accounts = ref([]);

function search() {
  let config = {
    params: {
      lastName: lastName.value
    }
  };

  axios.get('api/solution/account', config)
    .then(response => accounts.value = response.data);
}

</script>
