<template>
  <v-container>
    <v-form>
      <v-text-field v-model="employee.name" label="name"></v-text-field>
      <v-text-field type="number" v-model="employee.address" label="aadress"></v-text-field>
      <v-btn @click="save">Salvesta</v-btn>
    </v-form>

    <v-select :items="data" item-title="name" item-value="id">
    </v-select>
    <v-table>
      <thead>
        <th>id</th>
        <th>name</th>
        <th>aadress</th>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.id">
          <td>{{ item.id }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.address }}</td>
        </tr>
      </tbody>
    </v-table>

    <v-table>
      <tbody>
        <tr>
          <td>Id</td>
          <td>{{ employee.id }}</td>
        </tr>
        <tr>
          <td>Nimi</td>
          <td>{{ employee.name }}</td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script setup>
import {inject, onMounted, ref} from 'vue';

const axios = inject('axios');

const employee = ref({});
const data = ref([]);

function save() {
  let config = {
    params: {
      'key': 'value'
    }
  };
  // teeb päringu http://localhost:3030/api/test?key=value
  axios.post('api/test', employee.value, config)
    .then(() => getData());
}

function getData() {
  axios.get('api/test')
    .then(response => data.value = response.data);
  axios.get('api/sample3/employee/1')
    .then(response => employee.value = response.data
    );
}

onMounted(getData);

</script>
