<template>
  <div class="home">
    <div v-for="student in students" :key="student.id">
      <h1>Resume: {{ student.resume }}</h1>
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
