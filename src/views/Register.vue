<template>
  <v-container>
    <v-form>
      <v-text-field label="Username" v-model="user.username"></v-text-field>
      <v-text-field label="password" v-model="user.password"></v-text-field>
      <v-btn @click="save">Save</v-btn>
    </v-form>
  </v-container>
</template>

<script setup>
import {inject, ref} from 'vue';

const axios = inject('axios');

const user = ref({});

function save() {
    axios.post("api/user", user.value)
}

</script>
