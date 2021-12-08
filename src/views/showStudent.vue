<template>
  <div class="students-show">
    <h1>First name: {{ student.first_name }}</h1>
    <h3>Last name: {{ student.last_name }}</h3>
    <h3>email:{{ student.email }}</h3>
    <h3>Phone number: {{ student.phone_number }}</h3>
    <h3>Short bio: {{ student.short_bio }}</h3>
    <h3>Linkedin: {{ student.linkedin }}</h3>
    <h3>
      Twitter handle:
      <a v-bind:href="`https://twitter.com/${student.twitter}`">{{ student.twitter }}</a>
    </h3>
    <h3>Website: {{ student.website }}</h3>
    <h3>Online resume: {{ student.online_resume }}</h3>
    <h3>photo: {{ student.photo }}</h3>
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
