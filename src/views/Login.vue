<template>
  <v-container>
    <v-form>
      <v-text-field label="Owner last name" v-model="lastName"></v-text-field>
      <v-text-field label="Owner last name" v-model="lastName"></v-text-field>
      <v-btn @click="search">Login</v-btn>
    </v-form>
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
