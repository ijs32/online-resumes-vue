<template>
  <div class="home">
    <section id="hero">
      <div class="hero-container">
        <h1>Online Resume List</h1>
        <div v-for="student in students" :key="student.id">
          <div class="row" style="text-align: center">
            <div class="col-lg-12">
              <!-- <div v-for="capstone in capstones" :key="capstone"> -->
              <div class="icon-box">
                <div class="icon"><i class="bx bxl-dribbble"></i></div>
                <h3 style="color: white">
                  <router-link v-bind:to="`/student/${student.id}`">
                    {{ student.first_name }} {{ student.last_name }}
                  </router-link>
                </h3>
              </div>
            </div>
          </div>
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
