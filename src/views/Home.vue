<template>
  <div class="home">
    <section id="hero">
      <div class="hero-container">
        <h1>Online Resume List</h1>
        <div style="text-align: center" v-for="student in students" :key="student.id">
          <h3 style="color: white">
            <router-link v-bind:to="`/student/${student.id}`">
              {{ student.first_name }} {{ student.last_name }}
            </router-link>
          </h3>
        </div>
      </div>
    </section>
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
