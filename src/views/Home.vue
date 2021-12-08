<template>
  <div class="home">
    <div v-for="student in students" :key="student.id">
      <h1>First name: {{ student.first_name }}</h1>
      <router-link v-bind:to="`/student/${student.id}`">More Info</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      students: [],
    };
  },
  created: function () {
    this.indexStudents();
  },
  methods: {
    indexStudents() {
      axios.get("/students").then((response) => {
        this.students = response.data;
        console.log("YOOOO WE DID IT!!!", response.data);
      });
    },
  },
};
</script>
