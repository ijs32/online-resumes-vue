<template>
  <div class="students-show">
    <h1>First name: {{ student.first_name }}</h1>
    <h3>email:{{ student.email }}</h3>
    <h3>Twitter handle: {{ student.twitter_handle }}</h3>
    <router-link v-bind:to="`/`">Home</router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      student: {},
    };
  },
  created: function () {
    axios.get("/students/" + this.$route.params.id).then((response) => {
      this.student = response.data;
    });
  },
  methods: {},
};
</script>
